import { copy, type CompanionLabel } from "./companion-copy";
import { saveCompanionState, type CompanionState } from "./companion-data";
import { getLocale, onLocaleChange } from "./i18n";

interface City { name: string; admin1?: string; country?: string; latitude: number; longitude: number }
interface Weather { temperature_2m: number; apparent_temperature: number; relative_humidity_2m: number; wind_speed_10m: number; weather_code: number; time: string }
interface Hooks { quiet(): boolean; say(message: string): void; completed(): void; closed(): void; focusTarget: HTMLElement }
const el = <K extends keyof HTMLElementTagNameMap>(tag: K, className = "") => {
  const node = document.createElement(tag); node.className = className; return node;
};
function label(key: CompanionLabel, node: HTMLElement): void { node.dataset.copy = key; node.textContent = copy(key); }
function button(key: CompanionLabel, fn: () => void): HTMLButtonElement {
  const node = el("button"); node.type = "button"; label(key, node); node.addEventListener("click", fn); return node;
}
function field(key: CompanionLabel, input: HTMLInputElement): HTMLLabelElement {
  const node = el("label"), caption = el("span"); label(key, caption); node.append(caption, input); return node;
}
function conditions(code: number): CompanionLabel {
  if (code === 0) return "clear";
  if (code <= 3) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if (code >= 95) return "storm";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  return code >= 51 && code <= 82 ? "rain" : "unknownWeather";
}

/** Static-site utilities: city is sent only on submit; tasks never leave storage. */
export class CompanionTools {
  private readonly root = el("section", "ff-companion-tools");
  private readonly status = el("p", "ff-companion-status");
  private readonly weatherResult = el("div", "ff-companion-weather-result");
  private readonly tasks = el("ul", "ff-companion-tasks");
  private readonly city = el("input");
  private readonly title = el("input");
  private readonly due = el("input");
  private readonly submit = el("button");
  private readonly cancel = button("cancel", () => this.resetForm());
  private readonly interval: number;
  private readonly unsubscribe: () => void;
  private pending?: AbortController;
  private generation = 0;
  private editing?: string;
  private destroyed = false;

  constructor(private readonly state: CompanionState, private readonly hooks: Hooks) {
    this.root.hidden = true;
    this.root.setAttribute("role", "dialog"); this.root.setAttribute("aria-labelledby", "ff-companion-tools-title");
    const heading = el("h2"); heading.id = "ff-companion-tools-title"; label("tools", heading);
    const close = button("close", () => this.close()); close.className = "ff-companion-tools-close";
    const weatherTitle = el("h3"); label("weather", weatherTitle);
    const weatherForm = el("form", "ff-companion-form");
    this.city.type = "search"; this.city.minLength = 2; this.city.maxLength = 80; this.city.required = true; this.city.value = state.city;
    const search = el("button"); search.type = "submit"; label("search", search);
    const privacy = el("p", "ff-companion-help"); label("weatherPrivacy", privacy);
    const attribution = el("a"); attribution.href = "https://open-meteo.com/"; attribution.target = "_blank"; attribution.rel = "noopener noreferrer"; attribution.textContent = "Open-Meteo · CC BY 4.0";
    this.weatherResult.setAttribute("aria-live", "polite");
    weatherForm.append(field("city", this.city), search);
    weatherForm.addEventListener("submit", event => { event.preventDefault(); void this.search(); });
    const taskTitle = el("h3"); label("tasks", taskTitle);
    const taskForm = el("form", "ff-companion-form");
    this.title.required = true; this.title.maxLength = 200;
    this.due.type = "datetime-local";
    this.submit.type = "submit"; label("add", this.submit); this.cancel.hidden = true;
    taskForm.append(field("taskTitle", this.title), field("due", this.due), this.submit, this.cancel);
    taskForm.addEventListener("submit", event => { event.preventDefault(); this.saveTask(); });
    const local = el("p", "ff-companion-help"); label("localOnly", local);
    this.status.setAttribute("role", "status");
    this.root.append(heading, close, weatherTitle, weatherForm, privacy, this.weatherResult, attribution, taskTitle, taskForm, this.tasks, local, this.status);
    this.root.addEventListener("keydown", event => { if (event.key === "Escape") { event.stopPropagation(); this.close(); } });
    document.body.append(this.root);
    this.renderTasks();
    this.unsubscribe = onLocaleChange(() => {
      for (const node of this.root.querySelectorAll<HTMLElement>("[data-copy]")) node.textContent = copy(node.dataset.copy as CompanionLabel);
      this.renderTasks();
    });
    this.interval = window.setInterval(() => this.remind(), 30_000);
  }

  get isOpen(): boolean { return !this.root.hidden; }
  open(): void { this.root.hidden = false; this.city.focus(); }
  close(): void {
    if (this.pending) this.weatherResult.textContent = "";
    this.root.hidden = true; this.pending?.abort(); this.generation++;
    this.hooks.focusTarget.focus({ preventScroll: true }); this.hooks.closed();
  }
  destroy(): void {
    this.destroyed = true; this.generation++; this.pending?.abort(); window.clearInterval(this.interval); this.unsubscribe(); this.root.remove();
  }
  remind(): void {
    if (document.hidden || this.hooks.quiet()) return;
    const due = this.state.tasks.filter(task => !task.done && !task.reminded && task.dueAt && Date.parse(task.dueAt) <= Date.now());
    if (!due.length) return;
    this.hooks.say(copy("dueReminder", { count: due.length }));
    due.forEach(task => { task.reminded = true; }); this.persist();
  }
  private persist(): void { if (!saveCompanionState(this.state)) this.status.textContent = copy("storageError"); }
  private resetForm(): void {
    this.editing = undefined; this.title.value = ""; this.due.value = ""; this.cancel.hidden = true; label("add", this.submit);
  }
  private saveTask(): void {
    const title = this.title.value.trim(); if (!title) return;
    const dueAt = this.due.value ? new Date(this.due.value).toISOString() : undefined;
    const existing = this.state.tasks.find(task => task.id === this.editing);
    if (existing) Object.assign(existing, { title, dueAt, reminded: false });
    else {
      if (this.state.tasks.length >= 50) { this.status.textContent = copy("taskLimit"); return; }
      this.state.tasks.push({ id: crypto.randomUUID(), title, dueAt, done: false, reminded: false });
    }
    this.status.textContent = ""; this.persist(); this.resetForm(); this.renderTasks(); this.title.focus();
  }
  private renderTasks(): void {
    this.tasks.replaceChildren();
    if (!this.state.tasks.length) { const empty = el("li"); empty.textContent = copy("empty"); this.tasks.append(empty); return; }
    for (const task of this.state.tasks) {
      const item = el("li"); item.classList.toggle("is-done", task.done);
      const check = el("input"); check.type = "checkbox"; check.checked = task.done; check.setAttribute("aria-label", `${copy(task.done ? "reopen" : "complete")}: ${task.title}`);
      check.addEventListener("change", () => { task.done = check.checked; if (task.done) this.hooks.completed(); else task.reminded = false; this.persist(); this.renderTasks(); });
      const text = el("span", "ff-companion-task-text"); const title = el("span"); title.textContent = task.title; text.append(title);
      if (task.dueAt) { const due = el("time"); due.dateTime = task.dueAt; due.textContent = new Date(task.dueAt).toLocaleString(getLocale()); text.append(due); }
      const edit = button("edit", () => {
        this.editing = task.id; this.title.value = task.title;
        if (task.dueAt) { const date = new Date(task.dueAt); this.due.value = new Date(date.getTime() - date.getTimezoneOffset() * 60_000).toISOString().slice(0, 16); } else this.due.value = "";
        label("save", this.submit); this.cancel.hidden = false; this.title.focus();
      });
      const remove = button("remove", () => { this.state.tasks = this.state.tasks.filter(value => value.id !== task.id); if (this.editing === task.id) this.resetForm(); this.persist(); this.renderTasks(); });
      item.append(check, text, edit, remove); this.tasks.append(item);
    }
  }

  private async request(url: URL, signal: AbortSignal): Promise<unknown> {
    const response = await fetch(url, { signal, credentials: "omit", referrerPolicy: "no-referrer" });
    if (!response.ok) throw new Error(`Weather HTTP ${response.status}`);
    return response.json();
  }
  private async search(): Promise<void> {
    const city = this.city.value.trim(); if (city.length < 2) return;
    this.state.city = city; this.persist(); this.weatherResult.textContent = copy("loading");
    this.pending?.abort(); const controller = new AbortController(); this.pending = controller;
    const generation = ++this.generation; const timer = window.setTimeout(() => controller.abort(), 8000);
    try {
      const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
      url.search = new URLSearchParams({ name: city, count: "5", language: getLocale().startsWith("zh") ? "zh" : "en", format: "json" }).toString();
      const raw = await this.request(url, controller.signal) as { results?: City[] };
      if (generation !== this.generation || this.destroyed) return;
      const cities = Array.isArray(raw.results) ? raw.results.filter(city => typeof city.name === "string" && Number.isFinite(city.latitude) && Math.abs(city.latitude) <= 90 && Number.isFinite(city.longitude) && Math.abs(city.longitude) <= 180) : [];
      this.weatherResult.replaceChildren();
      if (!cities.length) { this.weatherResult.textContent = copy("noCity"); return; }
      const caption = el("p"); caption.textContent = copy("chooseCity"); this.weatherResult.append(caption);
      for (const city of cities) {
        const choice = el("button"); choice.type = "button"; choice.textContent = [city.name, city.admin1, city.country].filter(Boolean).join(" · ");
        choice.addEventListener("click", () => { void this.forecast(city); }); this.weatherResult.append(choice);
      }
    } catch { if (generation === this.generation && !this.destroyed) this.weatherResult.textContent = copy("weatherError"); }
    finally { window.clearTimeout(timer); if (this.pending === controller) this.pending = undefined; }
  }
  private async forecast(city: City): Promise<void> {
    this.pending?.abort(); const controller = new AbortController(); this.pending = controller;
    const generation = ++this.generation, timer = window.setTimeout(() => controller.abort(), 8000);
    this.weatherResult.textContent = copy("loading");
    try {
      const url = new URL("https://api.open-meteo.com/v1/forecast");
      url.search = new URLSearchParams({ latitude: String(city.latitude), longitude: String(city.longitude), timezone: "auto", current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code" }).toString();
      const raw = await this.request(url, controller.signal) as { current?: Weather }, weather = raw.current;
      if (generation !== this.generation || this.destroyed) return;
      if (!weather || ![weather.temperature_2m, weather.apparent_temperature, weather.relative_humidity_2m, weather.wind_speed_10m, weather.weather_code].every(Number.isFinite) || typeof weather.time !== "string") throw new Error("Invalid weather payload");
      const summary = copy("conditions", { city: city.name, weather: copy(conditions(weather.weather_code)), temperature: weather.temperature_2m.toFixed(1) });
      this.weatherResult.replaceChildren();
      for (const text of [summary, copy("weatherDetails", { feels: weather.apparent_temperature.toFixed(1), humidity: weather.relative_humidity_2m, wind: weather.wind_speed_10m }), copy("updated", { time: weather.time.replace("T", " ") })]) { const p = el("p"); p.textContent = text; this.weatherResult.append(p); }
      this.hooks.say(summary);
    } catch { if (generation === this.generation && !this.destroyed) this.weatherResult.textContent = copy("weatherError"); }
    finally { window.clearTimeout(timer); if (this.pending === controller) this.pending = undefined; }
  }
}
