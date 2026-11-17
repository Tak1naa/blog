import { i as et, g as z, o as Z, C as X, c as W, t as it } from "./app-Bxqs_jf6.js";
let D;
function st() {
  return D || (D = new Promise((h, e) => {
    const i = document.createElement("script");
    i.src = "/blog/vendor/cubism/live2dcubismcore.js", i.async = !0;
    const s = window.setTimeout(() => t(), 1e4), t = () => {
      window.clearTimeout(s), i.remove(), e(new Error("Cubism Core failed to load"));
    };
    i.onerror = t, i.onload = () => {
      window.clearTimeout(s), h();
    }, document.head.append(i);
  }).catch((h) => {
    throw D = void 0, h;
  }), D);
}
function ot(h) {
  try {
    const e = h._state?.l2d6Model?._subdelegates?.[0]?.getLive2DManager()._models?.[0]?.getModel();
    if (!e) return;
    const i = e.getOverrideMultiplyAndScreenColor(), s = [];
    for (let t = 0; t < e.getDrawableCount(); t += 1)
      if (/Hair/.test(e.getDrawableId(t).getString())) {
        i.setDrawableScreenColorEnabled(t, !0);
        const a = e.getDrawableVertexUvs(t);
        let n = 1, o = 0;
        for (let r = 0; r < a.length; r += 2)
          n = Math.min(n, a[r]), o = Math.max(o, a[r]);
        s.push({ index: t, min: n, max: o });
      }
    return (t) => {
      const a = Math.max(0.08, Math.min(0.9, t));
      for (const { index: n, min: o, max: r } of s)
        i.setDrawableScreenColorByRGBA(n, 8e-3, 0.012, 0.024, Math.min(0.98, o + (r - o) * a));
    };
  } catch {
    return;
  }
}
class nt {
  angles = [0, 0, 0, 0];
  velocities = [0, 0, 0, 0];
  step(e, i) {
    const s = Math.max(0, Math.min(2, i));
    for (let t = 0; t < 4; t++) {
      const a = t < 2 ? 24 : 12;
      this.velocities[t] = (this.velocities[t] + (e[t] - this.angles[t]) * 0.065 * s) * Math.pow(0.83, s), this.angles[t] = Math.max(-a, Math.min(a, this.angles[t] + this.velocities[t] * s));
    }
    return this.angles;
  }
  reset() {
    this.angles.fill(0), this.velocities.fill(0);
  }
  get moving() {
    return this.angles.some((e, i) => Math.abs(e) + Math.abs(this.velocities[i]) > 0.05);
  }
}
const I = (h) => Math.max(0, Math.min(1, h));
function at(h) {
  const e = h._state?.l2d6Model?._subdelegates?.[0]?.getLive2DManager()._models?.[0];
  if (!e || typeof e.doDraw != "function") return;
  const i = e.getModel();
  let s = -1;
  for (let c = 0; c < i.getDrawableCount(); c++) if (/^ArtMeshTopwear/.test(i.getDrawableId(c).getString())) {
    s = c;
    break;
  }
  if (s < 0) return;
  const t = new Float32Array(i.getDrawableVertices(s));
  if (t.length < 8) return;
  let a = 1 / 0, n = -1 / 0, o = 1 / 0, r = -1 / 0;
  for (let c = 0; c < t.length; c += 2)
    a = Math.min(a, t[c]), n = Math.max(n, t[c]), o = Math.min(o, t[c + 1]), r = Math.max(r, t[c + 1]);
  const l = n - a, f = r - o;
  if (l <= 0 || f <= 0) return;
  const v = e.doDraw, w = new Float32Array(t.length), g = [];
  for (let c = 0; c < i.getDrawableCount(); c++)
    /^ArtMeshMouthOpen/.test(i.getDrawableId(c).getString()) && g.push({ index: c, saved: new Float32Array(i.getDrawableVertices(c).length) });
  let M = [0, 0, 0, 0], k = 0;
  const C = function() {
    const c = i.getDrawableVertices(s);
    w.set(c);
    for (let p = 0; p < c.length; p += 2) {
      const y = (t[p] - a) / l, T = (r - t[p + 1]) / f;
      let E, x, _, O;
      T > 0.64 ? (E = y < 0.5 ? 2 : 3, _ = y < 0.5 ? 0.38 : 0.62, O = 0.64, x = I((T - 0.64) / 0.14)) : (E = y < 0.5 ? 0 : 1, _ = y < 0.5 ? 0.27 : 0.73, O = 0.07, x = I((Math.abs(y - 0.5) - 0.17) / 0.15) * I(T / 0.12) * I((0.57 - T) / 0.08));
      const L = M[E] * x * Math.PI / 180;
      if (!L) continue;
      const U = a + _ * l, j = r - O * f, Y = w[p] - U, V = w[p + 1] - j;
      c[p] = U + Y * Math.cos(L) - V * Math.sin(L), c[p + 1] = j + Y * Math.sin(L) + V * Math.cos(L);
    }
    let A = 1 / 0, F = -1 / 0, u = 1 / 0, S = -1 / 0;
    for (const p of g) {
      p.saved.set(i.getDrawableVertices(p.index));
      for (let y = 0; y < p.saved.length; y += 2)
        A = Math.min(A, p.saved[y]), F = Math.max(F, p.saved[y]), u = Math.min(u, p.saved[y + 1]), S = Math.max(S, p.saved[y + 1]);
    }
    for (const p of g) {
      const y = i.getDrawableVertices(p.index), T = (A + F) / 2, E = (u + S) / 2;
      for (let x = 0; x < y.length; x += 2)
        y[x] = T + (p.saved[x] - T) * (1 + 1.1 * k), y[x + 1] = E + (p.saved[x + 1] - E) * (1 + 0.8 * k);
    }
    try {
      v.call(this);
    } finally {
      c.set(w);
      for (const p of g) i.getDrawableVertices(p.index).set(p.saved);
    }
  };
  return e.doDraw = C, { pose: (c, A = 0) => {
    M = [...c], k = I(A);
  }, destroy: () => {
    e.doDraw === C && (e.doDraw = v);
  } };
}
const rt = {
  actions: ["泷奈的动作", "Takina's actions"],
  stretch: ["伸懒腰", "Stretch"],
  think: ["认真思考", "Think"],
  look: ["左右张望", "Look around"],
  wink: ["眨眨眼", "Wink"],
  doze: ["打瞌睡", "Doze"],
  happy: ["开心晃动", "Happy sway"],
  wave: ["招手", "Wave"],
  surprised: ["小小惊讶", "Surprised"],
  pout: ["有点不满", "Pout"],
  speaking: ["说句话", "Say hello"],
  sleep: ["休息一下", "Rest"],
  wake: ["叫醒泷奈", "Wake up"],
  home: ["回到 Dock", "Return to Dock"],
  random: ["随机小动作", "Random actions"],
  autoReturn: ["松手后自动归位", "Return after release"],
  roam: ["短距离漫游", "Short strolls"],
  tools: ["天气与本地待办", "Weather & local tasks"],
  close: ["关闭", "Close"],
  greeting: ["我在这里。右键可以点播动作。", "I'm here. Right-click to choose an action."],
  hello: ["稍微休息一下，再继续吧。", "Take a little break before carrying on."],
  resting: ["休息一会儿，点击就能叫醒我。", "Resting. Click to wake me up."],
  awake: ["醒啦，继续陪着你。", "Awake and ready to keep you company."],
  fallback: ["这段动作暂不可用，先用表情回应你。", "That clip is unavailable. Here's an expression instead."],
  city: ["城市", "City"],
  search: ["查询天气", "Find weather"],
  weather: ["天气", "Weather"],
  weatherPrivacy: ["查询时将城市发送至 Open-Meteo；不自动定位。", "City searches go to Open-Meteo. No automatic location access."],
  loading: ["正在查询…", "Loading…"],
  chooseCity: ["请选择城市", "Choose a city"],
  noCity: ["没有找到城市，请补充省份或国家。", "No cities found. Try adding a region or country."],
  weatherError: ["天气查询失败，请稍后重试。", "Weather unavailable. Please try again."],
  conditions: ["{city}：{weather}，{temperature}°C", "{city}: {weather}, {temperature}°C"],
  weatherDetails: ["体感 {feels}°C · 湿度 {humidity}% · 风速 {wind} km/h", "Feels like {feels}°C · Humidity {humidity}% · Wind {wind} km/h"],
  updated: ["当地数据时间：{time}", "Local observation time: {time}"],
  clear: ["晴", "Clear"],
  cloudy: ["多云", "Cloudy"],
  fog: ["雾", "Fog"],
  rain: ["雨", "Rain"],
  snow: ["雪", "Snow"],
  storm: ["雷雨", "Thunderstorm"],
  unknownWeather: ["天气数据", "Weather"],
  tasks: ["本地待办", "Local tasks"],
  taskTitle: ["待办内容", "Task"],
  due: ["到期时间（可选）", "Due date (optional)"],
  add: ["添加", "Add"],
  save: ["保存修改", "Save changes"],
  cancel: ["取消编辑", "Cancel editing"],
  empty: ["还没有待办。", "No tasks yet."],
  edit: ["编辑", "Edit"],
  remove: ["删除", "Delete"],
  complete: ["标为完成", "Mark complete"],
  reopen: ["恢复待办", "Mark incomplete"],
  localOnly: ["仅保存到当前浏览器；网页打开时提供气泡提醒。", "Saved in this browser only. Reminders appear while this page is open."],
  storageError: ["浏览器无法保存；本次操作仅在当前页面有效。", "Storage unavailable. Changes will last only on this page."],
  taskLimit: ["最多保存 50 条待办，请先清理已完成项目。", "Up to 50 tasks. Remove completed tasks first."],
  dueReminder: ["有 {count} 项待办已到期，记得看看。", "{count} tasks are due. Take a look when you're ready."],
  taskDone: ["完成一项，做得不错。", "One task done. Nice work."],
  dragHint: ["拖动移动，点击互动；右键或 Shift+F10 打开动作菜单。", "Drag to move, click to interact; right-click or Shift+F10 for actions."]
};
function m(h, e) {
  return et(rt[h][z().startsWith("zh") ? 0 : 1], e);
}
const Q = "takina-companion:v1";
function $(h) {
  const e = { schema: 1, autoReturn: !0, random: !0, roam: !1, city: "", tasks: [] };
  if (!h || typeof h != "object" || !("schema" in h) || h.schema !== 1) return e;
  const i = h;
  for (const s of ["autoReturn", "random", "roam"]) typeof i[s] == "boolean" && (e[s] = i[s]);
  if (typeof i.city == "string" && (e.city = i.city.slice(0, 80)), Array.isArray(i.tasks)) {
    const s = /* @__PURE__ */ new Set();
    for (const t of i.tasks)
      if (!(!t || typeof t.id != "string" || !t.id || t.id.length > 100 || s.has(t.id) || typeof t.title != "string" || !t.title.trim()) && (s.add(t.id), e.tasks.push({
        id: t.id,
        title: t.title.trim().slice(0, 200),
        done: t.done === !0,
        reminded: t.reminded === !0,
        ...typeof t.dueAt == "string" && Number.isFinite(Date.parse(t.dueAt)) ? { dueAt: new Date(t.dueAt).toISOString() } : {}
      }), e.tasks.length === 50))
        break;
  }
  return e;
}
function ht() {
  try {
    return $(JSON.parse(localStorage.getItem(Q) ?? "null"));
  } catch {
    return $(null);
  }
}
function tt(h) {
  try {
    return localStorage.setItem(Q, JSON.stringify(h)), !0;
  } catch {
    return !1;
  }
}
function lt(h, e) {
  const i = h.filter((f) => e - f.time <= 120), s = i[0], t = i.at(-1);
  if (!s || !t || e - t.time > 65 || t.time - s.time < 12) return { x: 0, y: 0 };
  const a = (t.time - s.time) / 1e3, n = (t.x - s.x) / a, o = (t.y - s.y) / a, r = Math.hypot(n, o), l = r ? Math.min(1, 1400 / r) : 0;
  return { x: n * l, y: o * l };
}
function B(h, e, i, s) {
  const t = { ...h }, a = Math.max(0, Math.min(0.05, e)), n = Math.max(1, Math.ceil(Math.hypot(t.vx, t.vy) * a / 8));
  let o = !1;
  const r = Math.max(0, i.viewportWidth - i.width), l = Math.max(0, i.viewportHeight - i.height);
  for (let v = 0; v < n; v++) {
    const w = t.x, g = t.y, M = a / n;
    if (t.vx *= Math.exp(-2.8 * M), t.vy *= Math.exp(-2.8 * M), t.x += t.vx * M, t.y += t.vy * M, (t.x < 0 || t.x > r) && (t.x = Math.max(0, Math.min(r, t.x)), t.vx *= -0.42, o = !0), (t.y < 0 || t.y > l) && (t.y = Math.max(0, Math.min(l, t.y)), t.vy *= -0.42, o = !0), s && t.x + i.width > s.left && t.x < s.right && t.y + i.height > s.top && t.y < s.bottom) {
      if (g + i.height <= s.top)
        t.y = s.top - i.height, t.vy = -Math.abs(t.vy) * 0.36;
      else if (g >= s.bottom)
        t.y = s.bottom, t.vy = Math.abs(t.vy) * 0.36;
      else if (w + i.width <= s.left)
        t.x = s.left - i.width, t.vx = -Math.abs(t.vx) * 0.36;
      else if (w >= s.right)
        t.x = s.right, t.vx = Math.abs(t.vx) * 0.36;
      else continue;
      t.x = Math.max(0, Math.min(r, t.x)), t.y = Math.max(0, Math.min(l, t.y)), o = !0;
    }
  }
  const f = Math.hypot(t.vx, t.vy) < 12;
  return f && (t.vx = t.vy = 0), { state: t, hit: o, resting: f };
}
function dt(h, e = 0.16) {
  const i = h >= 0 && h < 0.8 ? e * Math.exp(-7 * h) * Math.cos(h * 23) : 0, s = Math.max(0.78, Math.min(1.18, 1 - i));
  return { x: 1 / Math.sqrt(s), y: s };
}
const d = (h, e = "") => {
  const i = document.createElement(h);
  return i.className = e, i;
};
function b(h, e) {
  e.dataset.copy = h, e.textContent = m(h);
}
function P(h, e) {
  const i = d("button");
  return i.type = "button", b(h, i), i.addEventListener("click", e), i;
}
function H(h, e) {
  const i = d("label"), s = d("span");
  return b(h, s), i.append(s, e), i;
}
function ct(h) {
  return h === 0 ? "clear" : h <= 3 ? "cloudy" : [45, 48].includes(h) ? "fog" : h >= 95 ? "storm" : [71, 73, 75, 77, 85, 86].includes(h) ? "snow" : h >= 51 && h <= 82 ? "rain" : "unknownWeather";
}
class ut {
  constructor(e, i) {
    this.state = e, this.hooks = i, this.root.hidden = !0, this.root.setAttribute("role", "dialog"), this.root.setAttribute("aria-labelledby", "ff-companion-tools-title");
    const s = d("h2");
    s.id = "ff-companion-tools-title", b("tools", s);
    const t = P("close", () => this.close());
    t.className = "ff-companion-tools-close";
    const a = d("h3");
    b("weather", a);
    const n = d("form", "ff-companion-form");
    this.city.type = "search", this.city.minLength = 2, this.city.maxLength = 80, this.city.required = !0, this.city.value = e.city;
    const o = d("button");
    o.type = "submit", b("search", o);
    const r = d("p", "ff-companion-help");
    b("weatherPrivacy", r);
    const l = d("a");
    l.href = "https://open-meteo.com/", l.target = "_blank", l.rel = "noopener noreferrer", l.textContent = "Open-Meteo · CC BY 4.0", this.weatherResult.setAttribute("aria-live", "polite"), n.append(H("city", this.city), o), n.addEventListener("submit", (g) => {
      g.preventDefault(), this.search();
    });
    const f = d("h3");
    b("tasks", f);
    const v = d("form", "ff-companion-form");
    this.title.required = !0, this.title.maxLength = 200, this.due.type = "datetime-local", this.submit.type = "submit", b("add", this.submit), this.cancel.hidden = !0, v.append(H("taskTitle", this.title), H("due", this.due), this.submit, this.cancel), v.addEventListener("submit", (g) => {
      g.preventDefault(), this.saveTask();
    });
    const w = d("p", "ff-companion-help");
    b("localOnly", w), this.status.setAttribute("role", "status"), this.root.append(s, t, a, n, r, this.weatherResult, l, f, v, this.tasks, w, this.status), this.root.addEventListener("keydown", (g) => {
      g.key === "Escape" && (g.stopPropagation(), this.close());
    }), document.body.append(this.root), this.renderTasks(), this.unsubscribe = Z(() => {
      for (const g of this.root.querySelectorAll("[data-copy]")) g.textContent = m(g.dataset.copy);
      this.renderTasks();
    }), this.interval = window.setInterval(() => this.remind(), 3e4);
  }
  root = d("section", "ff-companion-tools");
  status = d("p", "ff-companion-status");
  weatherResult = d("div", "ff-companion-weather-result");
  tasks = d("ul", "ff-companion-tasks");
  city = d("input");
  title = d("input");
  due = d("input");
  submit = d("button");
  cancel = P("cancel", () => this.resetForm());
  interval;
  unsubscribe;
  pending;
  generation = 0;
  editing;
  destroyed = !1;
  get isOpen() {
    return !this.root.hidden;
  }
  open() {
    this.root.hidden = !1, this.city.focus();
  }
  close() {
    this.pending && (this.weatherResult.textContent = ""), this.root.hidden = !0, this.pending?.abort(), this.generation++, this.hooks.focusTarget.focus({ preventScroll: !0 }), this.hooks.closed();
  }
  destroy() {
    this.destroyed = !0, this.generation++, this.pending?.abort(), window.clearInterval(this.interval), this.unsubscribe(), this.root.remove();
  }
  remind() {
    if (document.hidden || this.hooks.quiet()) return;
    const e = this.state.tasks.filter((i) => !i.done && !i.reminded && i.dueAt && Date.parse(i.dueAt) <= Date.now());
    e.length && (this.hooks.say(m("dueReminder", { count: e.length })), e.forEach((i) => {
      i.reminded = !0;
    }), this.persist());
  }
  persist() {
    tt(this.state) || (this.status.textContent = m("storageError"));
  }
  resetForm() {
    this.editing = void 0, this.title.value = "", this.due.value = "", this.cancel.hidden = !0, b("add", this.submit);
  }
  saveTask() {
    const e = this.title.value.trim();
    if (!e) return;
    const i = this.due.value ? new Date(this.due.value).toISOString() : void 0, s = this.state.tasks.find((t) => t.id === this.editing);
    if (s) Object.assign(s, { title: e, dueAt: i, reminded: !1 });
    else {
      if (this.state.tasks.length >= 50) {
        this.status.textContent = m("taskLimit");
        return;
      }
      this.state.tasks.push({ id: crypto.randomUUID(), title: e, dueAt: i, done: !1, reminded: !1 });
    }
    this.status.textContent = "", this.persist(), this.resetForm(), this.renderTasks(), this.title.focus();
  }
  renderTasks() {
    if (this.tasks.replaceChildren(), !this.state.tasks.length) {
      const e = d("li");
      e.textContent = m("empty"), this.tasks.append(e);
      return;
    }
    for (const e of this.state.tasks) {
      const i = d("li");
      i.classList.toggle("is-done", e.done);
      const s = d("input");
      s.type = "checkbox", s.checked = e.done, s.setAttribute("aria-label", `${m(e.done ? "reopen" : "complete")}: ${e.title}`), s.addEventListener("change", () => {
        e.done = s.checked, e.done ? this.hooks.completed() : e.reminded = !1, this.persist(), this.renderTasks();
      });
      const t = d("span", "ff-companion-task-text"), a = d("span");
      if (a.textContent = e.title, t.append(a), e.dueAt) {
        const r = d("time");
        r.dateTime = e.dueAt, r.textContent = new Date(e.dueAt).toLocaleString(z()), t.append(r);
      }
      const n = P("edit", () => {
        if (this.editing = e.id, this.title.value = e.title, e.dueAt) {
          const r = new Date(e.dueAt);
          this.due.value = new Date(r.getTime() - r.getTimezoneOffset() * 6e4).toISOString().slice(0, 16);
        } else this.due.value = "";
        b("save", this.submit), this.cancel.hidden = !1, this.title.focus();
      }), o = P("remove", () => {
        this.state.tasks = this.state.tasks.filter((r) => r.id !== e.id), this.editing === e.id && this.resetForm(), this.persist(), this.renderTasks();
      });
      i.append(s, t, n, o), this.tasks.append(i);
    }
  }
  async request(e, i) {
    const s = await fetch(e, { signal: i, credentials: "omit", referrerPolicy: "no-referrer" });
    if (!s.ok) throw new Error(`Weather HTTP ${s.status}`);
    return s.json();
  }
  async search() {
    const e = this.city.value.trim();
    if (e.length < 2) return;
    this.state.city = e, this.persist(), this.weatherResult.textContent = m("loading"), this.pending?.abort();
    const i = new AbortController();
    this.pending = i;
    const s = ++this.generation, t = window.setTimeout(() => i.abort(), 8e3);
    try {
      const a = new URL("https://geocoding-api.open-meteo.com/v1/search");
      a.search = new URLSearchParams({ name: e, count: "5", language: z().startsWith("zh") ? "zh" : "en", format: "json" }).toString();
      const n = await this.request(a, i.signal);
      if (s !== this.generation || this.destroyed) return;
      const o = Array.isArray(n.results) ? n.results.filter((l) => typeof l.name == "string" && Number.isFinite(l.latitude) && Math.abs(l.latitude) <= 90 && Number.isFinite(l.longitude) && Math.abs(l.longitude) <= 180) : [];
      if (this.weatherResult.replaceChildren(), !o.length) {
        this.weatherResult.textContent = m("noCity");
        return;
      }
      const r = d("p");
      r.textContent = m("chooseCity"), this.weatherResult.append(r);
      for (const l of o) {
        const f = d("button");
        f.type = "button", f.textContent = [l.name, l.admin1, l.country].filter(Boolean).join(" · "), f.addEventListener("click", () => {
          this.forecast(l);
        }), this.weatherResult.append(f);
      }
    } catch {
      s === this.generation && !this.destroyed && (this.weatherResult.textContent = m("weatherError"));
    } finally {
      window.clearTimeout(t), this.pending === i && (this.pending = void 0);
    }
  }
  async forecast(e) {
    this.pending?.abort();
    const i = new AbortController();
    this.pending = i;
    const s = ++this.generation, t = window.setTimeout(() => i.abort(), 8e3);
    this.weatherResult.textContent = m("loading");
    try {
      const a = new URL("https://api.open-meteo.com/v1/forecast");
      a.search = new URLSearchParams({ latitude: String(e.latitude), longitude: String(e.longitude), timezone: "auto", current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code" }).toString();
      const n = await this.request(a, i.signal), o = n.current;
      if (s !== this.generation || this.destroyed) return;
      if (!o || ![o.temperature_2m, o.apparent_temperature, o.relative_humidity_2m, o.wind_speed_10m, o.weather_code].every(Number.isFinite) || typeof o.time != "string") throw new Error("Invalid weather payload");
      const r = m("conditions", { city: e.name, weather: m(ct(o.weather_code)), temperature: o.temperature_2m.toFixed(1) });
      this.weatherResult.replaceChildren();
      for (const l of [r, m("weatherDetails", { feels: o.apparent_temperature.toFixed(1), humidity: o.relative_humidity_2m, wind: o.wind_speed_10m }), m("updated", { time: o.time.replace("T", " ") })]) {
        const f = d("p");
        f.textContent = l, this.weatherResult.append(f);
      }
      this.hooks.say(r);
    } catch {
      s === this.generation && !this.destroyed && (this.weatherResult.textContent = m("weatherError"));
    } finally {
      window.clearTimeout(t), this.pending === i && (this.pending = void 0);
    }
  }
}
class mt {
  constructor(e, i, s) {
    this.root = e, this.clips = i, this.finished = s;
    const t = this.element;
    t.className = "ff-companion-video", t.muted = !0, t.defaultMuted = !0, t.playsInline = !0, t.preload = "none", t.setAttribute("aria-hidden", "true"), t.tabIndex = -1, e.append(t);
  }
  element = document.createElement("video");
  generation = 0;
  timer;
  pending;
  resolve;
  active = !1;
  destroyed = !1;
  async play(e) {
    if (this.cancel(), this.destroyed || !this.clips[e] || !this.element.canPlayType('video/webm; codecs="vp9"')) return !1;
    const i = this.generation, s = new AbortController();
    this.pending = s;
    const t = s.signal, a = this.element;
    return new Promise((n) => {
      this.resolve = n;
      const o = () => {
        if (i !== this.generation) return;
        const r = this.active;
        this.cancel(), r && this.finished();
      };
      a.addEventListener("error", o, { signal: t }), a.addEventListener("ended", () => {
        i === this.generation && (this.cancel(), this.finished());
      }, { signal: t }), a.addEventListener("loadeddata", () => {
        if (i !== this.generation || document.hidden) {
          o();
          return;
        }
        try {
          const r = document.createElement("canvas");
          r.width = r.height = 1;
          const l = r.getContext("2d");
          if (!l) {
            o();
            return;
          }
          if (l.drawImage(a, 0, 0, 1, 1, 0, 0, 1, 1), l.getImageData(0, 0, 1, 1).data[3] > 16) {
            o();
            return;
          }
        } catch {
          o();
          return;
        }
        a.play().then(() => {
          i === this.generation && (this.active = !0, this.root.classList.add("is-video-playing"), this.root.dataset.videoAction = e, this.timer !== void 0 && window.clearTimeout(this.timer), this.timer = window.setTimeout(o, Math.min(15e3, a.duration * 1e3 + 1500)), this.resolve?.(!0), this.resolve = void 0);
        }).catch(o);
      }, { once: !0, signal: t }), this.timer = window.setTimeout(o, 7e3), a.src = this.clips[e], a.load();
    });
  }
  cancel() {
    this.generation++, this.pending?.abort(), this.pending = void 0, this.timer !== void 0 && window.clearTimeout(this.timer), this.timer = void 0, this.resolve?.(!1), this.resolve = void 0, this.active = !1, this.root.classList.remove("is-video-playing"), delete this.root.dataset.videoAction, this.element.pause(), this.element.hasAttribute("src") && (this.element.removeAttribute("src"), this.element.load());
  }
  destroy() {
    this.destroyed = !0, this.cancel(), this.element.remove();
  }
}
const pt = ["stretch", "think", "look", "wink", "doze", "happy", "wave", "surprised", "pout", "speaking"], R = (h, e) => Math.max(0, Math.min(Math.max(0, e), h));
class ft {
  constructor(e, i, s, t = {}) {
    this.root = e, this.canvas = i, this.hooks = s, this.video = new mt(e, t, () => this.finishAction()), this.bubble.className = "ff-companion-bubble", this.bubble.hidden = !0, this.bubble.setAttribute("aria-live", "polite"), e.append(this.bubble), this.tools = new ut(this.state, {
      quiet: () => this.sleeping || !!this.drag || !!this.action || !!this.flight,
      say: (o) => this.say(o),
      completed: () => {
        this.say(m("taskDone")), this.playAction("happy");
      },
      closed: () => this.scheduleIdle(),
      focusTarget: i
    }), i.style.touchAction = "none", i.tabIndex = 0, this.translate(), this.unsubscribe = Z(() => {
      this.translate(), this.closeMenu(!1);
    });
    let a = !1;
    if (!this.state.autoReturn)
      try {
        const o = JSON.parse(localStorage.getItem(X) ?? "null");
        o && Number.isFinite(o.x) && Number.isFinite(o.y) && (this.position(o.x, o.y), a = !0);
      } catch {
      }
    s.perch(!a);
    const n = this.abort.signal;
    i.addEventListener("pointerdown", this.onDown, { signal: n }), i.addEventListener("pointermove", this.onMove, { signal: n }), i.addEventListener("pointerup", this.onUp, { signal: n }), i.addEventListener("pointercancel", this.onCancel, { signal: n }), i.addEventListener("lostpointercapture", this.onCancel, { signal: n }), i.addEventListener("click", (o) => {
      if (o.preventDefault(), o.stopImmediatePropagation(), this.suppressClick) {
        this.suppressClick = !1;
        return;
      }
      if (this.sleeping) {
        this.setSleeping(!1);
        return;
      }
      this.cancelAction(), this.bounce(), this.playAction("happy");
    }, { capture: !0, signal: n }), i.addEventListener("contextmenu", (o) => {
      o.preventDefault(), this.openMenu(o.clientX, o.clientY);
    }, { capture: !0, signal: n }), i.addEventListener("keydown", (o) => {
      if (o.key === "ContextMenu" || o.shiftKey && o.key === "F10") {
        o.preventDefault();
        const r = e.getBoundingClientRect();
        this.openMenu(r.right, r.top + 30);
      } else o.key === "Enter" || o.key === " " ? (o.preventDefault(), i.click()) : o.key === "Escape" && (this.cancelAction(), this.closeMenu());
    }, { signal: n }), document.addEventListener("pointermove", this.onGaze, { passive: !0, signal: n }), document.addEventListener("visibilitychange", this.onVisibility, { signal: n }), document.addEventListener("pointerdown", (o) => {
      this.menu && !this.menu.contains(o.target) && this.closeMenu(!1);
    }, { capture: !0, signal: n }), window.addEventListener("resize", () => {
      this.closeMenu(!1), this.hooks.isPerched() || this.position(e.offsetLeft, e.offsetTop);
    }, { signal: n });
  }
  state = ht();
  abort = new AbortController();
  video;
  tools;
  bubble = document.createElement("output");
  joints = new nt();
  unsubscribe;
  menu;
  drag;
  flight;
  frame = 0;
  lastFrame = 0;
  idleTimer;
  bubbleTimer;
  action;
  actionStarted = 0;
  actionUntil = 0;
  lastAction;
  generation = 0;
  sleeping = !1;
  ready = !1;
  destroyed = !1;
  suppressClick = !1;
  squishStart = -1e4;
  squishDepth = 0.16;
  angle = 0;
  angularVelocity = 0;
  targetAngle = 0;
  impulse = 0;
  head = { x: 0, y: 0, z: 0 };
  gaze = { x: 0, y: 0 };
  mouth = 0;
  previousDown = -1e3;
  start() {
    this.ready = !0, this.say(m("greeting")), this.scheduleIdle(), this.wake();
  }
  translate() {
    this.canvas.title = m("dragHint"), this.canvas.setAttribute("aria-label", m("dragHint"));
  }
  get busy() {
    return !!this.drag || !!this.flight || !!this.action || !!this.menu || this.tools.isOpen;
  }
  position(e, i) {
    this.root.style.left = `${R(e, window.innerWidth - this.root.offsetWidth).toFixed(2)}px`, this.root.style.top = `${R(i, window.innerHeight - this.root.offsetHeight).toFixed(2)}px`, this.root.style.right = this.root.style.bottom = "auto", this.root.dataset.tipSide = this.root.offsetLeft + this.root.offsetWidth / 2 > window.innerWidth / 2 ? "start" : "end";
  }
  savePosition() {
    if (this.state.autoReturn) {
      W();
      return;
    }
    try {
      localStorage.setItem(X, JSON.stringify({ x: this.root.offsetLeft, y: this.root.offsetTop }));
    } catch {
    }
  }
  saveState() {
    tt(this.state) || this.say(m("storageError"));
  }
  scheduleIdle() {
    this.idleTimer !== void 0 && window.clearTimeout(this.idleTimer), this.idleTimer = void 0, !(!this.ready || this.destroyed || document.hidden || this.sleeping || !this.state.random && !this.state.roam) && (this.idleTimer = window.setTimeout(() => {
      if (this.idleTimer = void 0, this.busy) {
        this.scheduleIdle();
        return;
      }
      if (this.state.roam && Math.random() < 0.25) {
        this.hooks.perch(!1);
        const e = this.root.offsetLeft > window.innerWidth / 2 ? -1 : 1;
        this.flight = { x: this.root.offsetLeft, y: this.root.offsetTop, vx: e * 120, vy: -20 }, this.wake();
      } else if (this.state.random) {
        const e = ["stretch", "think", "look", "wink", "doze", "happy"].filter((i) => i !== this.lastAction);
        this.playAction(e[Math.floor(Math.random() * e.length)]);
      } else this.scheduleIdle();
    }, 16e3 + Math.random() * 1e4));
  }
  say(e) {
    this.destroyed || this.sleeping || document.hidden || (this.bubbleTimer !== void 0 && window.clearTimeout(this.bubbleTimer), this.bubble.textContent = e, this.bubble.hidden = !1, this.bubbleTimer = window.setTimeout(() => {
      this.bubble.hidden = !0;
    }, 5e3));
  }
  cancelAction() {
    this.generation++, this.action = void 0, this.actionUntil = 0, this.video.cancel(), this.root.dataset.action = this.sleeping ? "sleep" : "idle", this.hooks.expression(this.sleeping ? "sleepy" : "neutral");
  }
  finishAction() {
    this.cancelAction(), this.wake(), this.tools.remind(), this.scheduleIdle();
  }
  async playAction(e) {
    if (!this.ready || this.destroyed || document.hidden || this.drag || this.flight) return;
    this.sleeping && this.setSleeping(!1), this.cancelAction();
    const i = this.generation;
    this.action = this.lastAction = e, this.actionStarted = performance.now(), this.actionUntil = this.actionStarted + 4500, this.root.dataset.action = e;
    const s = { stretch: "smile", think: "curious", look: "curious", wink: "wink", doze: "sleepy", happy: "laugh", wave: "smile", surprised: "surprised", pout: "pout", speaking: "speaking" };
    if (this.hooks.expression(s[e]), ["stretch", "think", "look"].includes(e)) {
      this.actionUntil = this.actionStarted + 16e3;
      const t = await this.video.play(e);
      if (i !== this.generation || this.destroyed) return;
      t || (this.actionUntil = performance.now() + 3500, this.say(m("fallback")));
    }
    e === "speaking" && this.say(m("hello")), this.wake();
  }
  setSleeping(e) {
    this.sleeping = e, this.cancelAction(), this.root.classList.toggle("is-sleeping", e), e ? (this.bubble.hidden = !0, this.idleTimer !== void 0 && window.clearTimeout(this.idleTimer), this.idleTimer = void 0) : (this.say(m("awake")), this.tools.remind(), this.scheduleIdle()), this.wake();
  }
  bounce(e = 0.16) {
    this.squishStart = performance.now(), this.squishDepth = e, this.wake();
  }
  onDown = (e) => {
    if (e.button !== 0 || !this.ready || this.drag) return;
    this.closeMenu(!1), this.cancelAction(), this.flight = void 0, this.sleeping && this.setSleeping(!1);
    const i = performance.now(), s = this.root.getBoundingClientRect();
    this.drag = {
      id: e.pointerId,
      start: { x: e.clientX, y: e.clientY },
      origin: { x: s.left, y: s.top },
      moved: !1,
      sling: i - this.previousDown < 330,
      trail: [{ x: e.clientX, y: e.clientY, time: i }]
    }, this.previousDown = i;
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
    }
  };
  onMove = (e) => {
    const i = this.drag;
    if (!i || e.pointerId !== i.id) return;
    const s = e.clientX - i.start.x, t = e.clientY - i.start.y, a = i.trail.at(-1);
    i.trail.push({ x: e.clientX, y: e.clientY, time: performance.now() }), i.trail = i.trail.slice(-20), !(!i.moved && Math.hypot(s, t) < 6) && (i.moved || (i.moved = !0, this.hooks.perch(!1), this.root.classList.add("is-carried"), this.root.dataset.action = "carried", this.hooks.expression("carried"), this.bubble.hidden = !0, i.origin = { x: i.start.x - this.root.offsetWidth * 0.62, y: i.start.y - this.root.offsetHeight * 0.44 }), this.targetAngle = -28 + Math.max(-10, Math.min(10, (e.clientX - a.x) * -0.8)), this.impulse = Math.max(-12, Math.min(12, this.impulse + (e.clientX - a.x) * 0.4 + (e.clientY - a.y) * 0.15)), this.position(i.origin.x + s, i.origin.y + t), this.wake());
  };
  onUp = (e) => {
    const i = this.drag;
    if (!i || e.pointerId !== i.id) return;
    if (this.drag = void 0, this.canvas.hasPointerCapture(e.pointerId) && this.canvas.releasePointerCapture(e.pointerId), !i.moved) {
      this.scheduleIdle();
      return;
    }
    this.suppressClick = !0, this.targetAngle = 0, this.root.classList.remove("is-carried"), this.root.classList.add("is-settling");
    let s = lt(i.trail, performance.now());
    if (i.sling) {
      const t = e.clientX - i.start.x, a = e.clientY - i.start.y, n = Math.min(4, 1400 / Math.max(1, Math.hypot(t, a)));
      s = { x: -t * n, y: -a * n };
    }
    this.flight = { x: this.root.offsetLeft, y: this.root.offsetTop, vx: s.x, vy: s.y }, this.wake();
  };
  onCancel = (e) => {
    this.drag?.id === e.pointerId && (this.drag = void 0, this.targetAngle = 0, this.flight = void 0, this.root.classList.remove("is-carried"), this.suppressClick = !0, this.state.autoReturn ? this.hooks.perch(!0) : this.savePosition(), this.finishAction());
  };
  onGaze = (e) => {
    if (document.hidden || !this.ready || this.sleeping) return;
    const i = this.root.getBoundingClientRect(), s = i.left + i.width / 2, t = i.top + i.height / 3;
    this.gaze.x = Math.max(-1, Math.min(1, (e.clientX - s) / Math.max(1, e.clientX < s ? s : window.innerWidth - s))), this.gaze.y = Math.max(-1, Math.min(1, -(e.clientY - t) / Math.max(1, e.clientY < t ? t : window.innerHeight - t))), this.wake();
  };
  onVisibility = () => {
    if (!document.hidden) {
      this.lastFrame = performance.now(), this.tools.remind(), this.scheduleIdle(), this.wake();
      return;
    }
    cancelAnimationFrame(this.frame), this.frame = 0, this.idleTimer !== void 0 && window.clearTimeout(this.idleTimer), this.idleTimer = void 0, this.drag = void 0, this.flight = void 0, this.targetAngle = this.angle = this.angularVelocity = 0, this.joints.reset(), this.cancelAction(), this.closeMenu(!1), this.bubble.hidden = !0, this.root.classList.remove("is-carried", "is-settling"), this.canvas.style.transform = this.video.element.style.transform = "", this.state.autoReturn ? this.hooks.perch(!0) : this.savePosition();
  };
  wake() {
    !this.frame && !document.hidden && !this.destroyed && this.ready && (this.lastFrame = performance.now(), this.frame = requestAnimationFrame(this.tick));
  }
  tick = (e) => {
    if (this.frame = 0, this.destroyed || document.hidden) return;
    const i = Math.min(0.2, Math.max(1e-3, (e - this.lastFrame) / 1e3)), s = Math.min(0.035, i), t = s * 60;
    this.lastFrame = e;
    const a = !!this.drag?.moved;
    if (this.flight) {
      let u = B(this.flight, 0, { width: this.root.offsetWidth, height: this.root.offsetHeight, viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
      const S = Math.ceil(i / 0.05);
      let p = !1;
      for (let y = 0; y < S; y++)
        u = B(u.state, i / S, { width: this.root.offsetWidth, height: this.root.offsetHeight, viewportWidth: window.innerWidth, viewportHeight: window.innerHeight }, this.hooks.dock() ?? void 0), p ||= u.hit;
      this.flight = u.state, this.position(u.state.x, u.state.y), p && this.bounce(0.11), u.resting && (this.flight = void 0, this.state.autoReturn ? this.hooks.perch(!0) : this.savePosition(), this.finishAction());
    }
    this.action && e > this.actionUntil && this.finishAction();
    const n = (e - this.actionStarted) / 1e3, o = Math.sin(n * 5), r = Math.ceil(i * 60), l = i * 60 / r;
    for (let u = 0; u < r; u++)
      this.angularVelocity = (this.angularVelocity + (this.targetAngle - this.angle) * 0.075 * l) * Math.pow(0.79, l), this.angle = Math.max(-42, Math.min(12, this.angle + this.angularVelocity * l));
    this.impulse *= Math.pow(0.9, i * 60);
    const f = a ? [10 + this.impulse, -10 + this.impulse, this.impulse * 0.5 + 5, this.impulse * 0.5 - 5] : this.action === "wave" ? [o * 12 - 8, 0, 0, 0] : this.action === "happy" ? [o * 8, -o * 8, o * 3, -o * 3] : this.action === "surprised" ? [-16, 16, -5, 5] : this.action === "pout" ? [6, -6, 2, -2] : [0, 0, 0, 0];
    for (let u = 0; u < r; u++) this.joints.step(f, l);
    const v = this.action === "speaking" ? 0.2 + 0.6 * Math.abs(Math.sin(e / 130)) : this.action === "happy" ? 0.65 : this.action === "surprised" ? 1 : 0;
    this.mouth += (v - this.mouth) * (1 - Math.pow(0.7, t));
    const w = this.action === "doze", g = {
      x: this.sleeping ? 0 : this.gaze.x * 6,
      y: this.sleeping ? -4 : a ? -5 : w ? -3 * (0.5 + 0.5 * Math.sin(n * 3)) : this.gaze.y * 4,
      z: this.sleeping ? 7 : a ? -this.angle * 0.2 : this.action === "happy" ? o * 3 : this.action === "think" ? 6 : 0
    }, M = 1 - Math.pow(0.88, t);
    for (const u of ["x", "y", "z"]) this.head[u] += (g[u] - this.head[u]) * M;
    const k = { ParamAngleX: this.head.x, ParamAngleY: this.head.y, ParamAngleZ: this.head.z, ParamBodyAngleZ: this.angle * 0.35, ParamMouthOpenY: this.mouth };
    (this.sleeping || w) && (k.ParamEyeLOpen = k.ParamEyeROpen = this.sleeping ? 0 : Math.max(0.05, 0.3 + 0.25 * Math.cos(n * 3))), this.hooks.pose(k, this.joints.angles, this.mouth, 0.35 + this.head.x * 0.012 + this.angle * 8e-3), this.root.dataset.headPose = Object.values(this.head).map((u) => u.toFixed(3)).join(","), this.root.dataset.limbPose = this.joints.angles.map((u) => u.toFixed(2)).join(",");
    const C = dt((e - this.squishStart) / 1e3, this.squishDepth), c = this.action === "happy" ? o * 2 : 0, A = Math.abs(this.angle) + Math.abs(c) > 0.05 || Math.abs(C.y - 1) > 1e-3 ? `rotate(${(this.angle + c).toFixed(3)}deg) scale(${C.x.toFixed(4)},${C.y.toFixed(4)})` : "";
    this.canvas.style.transformOrigin = this.video.element.style.transformOrigin = a || Math.abs(this.angle) > 1 ? "62% 44%" : "50% 94%", this.canvas.style.transform = this.video.element.style.transform = A, !a && !this.flight && Math.abs(this.angle) + Math.abs(this.angularVelocity) < 0.05 && this.root.classList.remove("is-settling"), (this.busy || this.joints.moving || Math.abs(this.angle) + Math.abs(this.angularVelocity) > 0.05 || Math.abs(this.mouth - v) > 0.01 || ["x", "y", "z"].some((u) => Math.abs(this.head[u] - g[u]) > 0.01) || e - this.squishStart < 800) && !this.frame && (this.frame = requestAnimationFrame(this.tick));
  };
  closeMenu(e = !0) {
    this.menu && (this.menu.remove(), this.menu = void 0, e && this.canvas.focus({ preventScroll: !0 }), this.scheduleIdle());
  }
  openMenu(e, i) {
    if (!this.ready) return;
    this.closeMenu(!1), this.cancelAction();
    const s = document.createElement("section");
    s.className = "ff-companion-menu", s.setAttribute("role", "menu"), s.setAttribute("aria-label", m("actions"));
    const t = (n, o, r) => {
      const l = document.createElement("button");
      l.type = "button", l.textContent = m(n), l.setAttribute("role", r === void 0 ? "menuitem" : "menuitemcheckbox"), r !== void 0 && l.setAttribute("aria-checked", String(r)), l.dataset.companionAction = n, l.addEventListener("click", () => {
        this.closeMenu(), o();
      }), s.append(l);
    };
    for (const n of pt) t(n, () => {
      this.playAction(n);
    });
    const a = document.createElement("hr");
    a.setAttribute("role", "separator"), s.append(a), t(this.sleeping ? "wake" : "sleep", () => this.setSleeping(!this.sleeping)), t("home", () => {
      this.flight = void 0, this.hooks.perch(!0), W();
    });
    for (const n of ["autoReturn", "random", "roam"]) t(n, () => {
      this.state[n] = !this.state[n], this.saveState(), n === "autoReturn" && this.state.autoReturn && (this.flight = void 0, this.hooks.perch(!0), W()), this.scheduleIdle();
    }, this.state[n]);
    t("tools", () => this.tools.open()), s.addEventListener("keydown", (n) => {
      const o = [...s.querySelectorAll("button")], r = o.indexOf(document.activeElement);
      let l = r;
      if (n.key === "Escape" || n.key === "Tab") {
        n.key === "Escape" && n.preventDefault(), this.closeMenu();
        return;
      }
      if (n.key === "ArrowDown") l = (r + 1) % o.length;
      else if (n.key === "ArrowUp") l = (r - 1 + o.length) % o.length;
      else if (n.key === "Home") l = 0;
      else if (n.key === "End") l = o.length - 1;
      else return;
      n.preventDefault(), o[l]?.focus();
    }), document.body.append(s), this.menu = s, s.style.left = `${R(e, window.innerWidth - s.offsetWidth - 12) + 6}px`, s.style.top = `${R(i, window.innerHeight - s.offsetHeight - 12) + 6}px`, s.querySelector("button")?.focus();
  }
  destroy() {
    this.destroyed = !0, this.ready = !1, this.generation++, this.abort.abort(), this.unsubscribe(), cancelAnimationFrame(this.frame), this.idleTimer !== void 0 && window.clearTimeout(this.idleTimer), this.bubbleTimer !== void 0 && window.clearTimeout(this.bubbleTimer), this.video.destroy(), this.tools.destroy(), this.menu?.remove(), this.bubble.remove(), this.canvas.style.transform = "";
  }
}
const N = { width: 240, height: 300 }, J = 0.75, q = 140, G = 2 * Math.sqrt(q) * 0.62, gt = 14, yt = 34;
function K(h, e) {
  return Math.min(Math.max(0, h), Math.max(0, e));
}
class vt {
  constructor(e, i = {}) {
    this.config = e, this.options = i;
  }
  instance;
  loading = !1;
  loadTimer;
  dragCleanup;
  interactions;
  generation = 0;
  light;
  doll;
  root;
  perched = !1;
  perchFrame = 0;
  perchUntil = 0;
  perchTime = 0;
  spring = { x: 0, y: 0, vx: 0, vy: 0, placed: !1 };
  /**
   * Re-target the perch after the dock moved (scroll hide/show, resize, layout).
   * The spring keeps sampling the live dock box for a short window so it also
   * follows the dock's own CSS transition instead of only its end state.
   */
  followPerch() {
    !this.perched || !this.root || (this.perchUntil = performance.now() + 500, !this.perchFrame && !document.hidden && (this.perchTime = performance.now(), this.perchFrame = requestAnimationFrame(this.stepPerch)));
  }
  async start() {
    if (this.instance || this.loading || !this.config.enabled) return;
    this.loading = !0;
    const e = ++this.generation;
    try {
      await st();
      const i = await import("./index-BGoXlr71.js");
      if (e !== this.generation) return;
      const s = this.config.modelPaths.map((n) => ({
        path: n,
        tips: !1
      })), t = i.createWidget({
        model: s,
        menus: { items: [] },
        position: "bottom-right",
        size: this.options.perch ? { width: Math.round(N.width * J), height: Math.round(N.height * J) } : N,
        transitionType: "fade",
        transitionDuration: 900,
        primaryColor: "rgba(91, 111, 220, .86)"
      });
      this.instance = t, this.enableDragging(t);
      let a = !1;
      t.l2d?.on?.("loaded", () => {
        if (e !== this.generation || this.instance !== t) return;
        a = !0, this.light = ot(t.l2d), this.doll = at(t.l2d), this.light?.(0.35);
        const n = t.l2d?.getCanvas?.().parentElement;
        n && (n.dataset.hairLight = this.light ? "masked" : "unavailable"), n && (n.dataset.dollRig = this.doll ? "soft-joints" : "unavailable"), document.documentElement.classList.add("ff-live2d-ready"), this.interactions?.start(), this.loadTimer !== void 0 && window.clearTimeout(this.loadTimer), this.loadTimer = void 0;
      }), this.loadTimer = window.setTimeout(() => {
        !a && this.instance === t && this.stop();
      }, 15e3);
    } catch (i) {
      console.warn(it("live2d.loadFailed"), i);
    } finally {
      e === this.generation && (this.loading = !1);
    }
  }
  stop() {
    this.generation += 1, this.loading = !1, this.loadTimer !== void 0 && window.clearTimeout(this.loadTimer), this.loadTimer = void 0, this.dragCleanup?.(), this.dragCleanup = void 0, this.interactions = void 0, this.setPerched(!1), this.root = void 0, this.light = void 0, this.doll?.destroy(), this.doll = void 0, this.instance?.destroy(), this.instance = void 0, document.documentElement.classList.remove("ff-live2d-ready");
  }
  setPerched(e) {
    this.perched = e && !!this.options.perch && !!this.root, this.root?.classList.toggle("is-perched", this.perched), cancelAnimationFrame(this.perchFrame), this.perchFrame = 0, this.spring.placed = !!this.root?.style.left.endsWith("px"), this.spring.placed && this.root && (this.spring.x = this.root.offsetLeft, this.spring.y = this.root.offsetTop), this.spring.vx = this.spring.vy = 0, this.perched && this.followPerch();
  }
  perchTarget(e) {
    const i = this.options.perch?.();
    if (!i?.width) return;
    const s = i.right - yt - e.offsetWidth / 2, t = i.top - e.offsetHeight + gt;
    return {
      x: K(s, window.innerWidth - e.offsetWidth),
      y: K(t, window.innerHeight - e.offsetHeight)
    };
  }
  /** Semi-implicit Euler: integrate velocity first, then position with the new velocity. */
  stepPerch = (e) => {
    this.perchFrame = 0;
    const i = this.root;
    if (!this.perched || !i) return;
    const s = this.perchTarget(i);
    if (!s) return;
    const t = this.spring, a = Math.min(1 / 30, Math.max(0, (e - this.perchTime) / 1e3));
    this.perchTime = e, t.placed ? (t.vx += (q * (s.x - t.x) - G * t.vx) * a, t.vy += (q * (s.y - t.y) - G * t.vy) * a, t.x += t.vx * a, t.y += t.vy * a) : Object.assign(t, { x: s.x, y: s.y, vx: 0, vy: 0, placed: !0 });
    const n = Math.abs(s.x - t.x) + Math.abs(s.y - t.y) < 0.3 && Math.abs(t.vx) + Math.abs(t.vy) < 2;
    n && Object.assign(t, { x: s.x, y: s.y, vx: 0, vy: 0 }), i.style.left = `${t.x.toFixed(2)}px`, i.style.top = `${t.y.toFixed(2)}px`, i.style.right = "auto", i.style.bottom = "auto", i.dataset.tipSide = t.x + i.offsetWidth / 2 > window.innerWidth / 2 ? "start" : "end", (!n || e < this.perchUntil) && (this.perchFrame = requestAnimationFrame(this.stepPerch));
  };
  enableDragging(e) {
    const i = e.l2d?.getCanvas?.(), s = i?.parentElement;
    !i || !s || (s.classList.add("ff-live2d-shell"), this.root = s, this.interactions = new ft(s, i, {
      isPerched: () => this.perched,
      perch: (t) => this.setPerched(t),
      dock: () => this.options.perch?.() ?? null,
      expression: (t) => {
        e.l2d?.setExpression?.(t), s.dataset.expression = t;
      },
      pose: (t, a, n, o) => {
        e.l2d?.setParams?.(t), this.doll?.pose(a, n), this.light?.(o);
      }
    }, this.config.videos), this.dragCleanup = () => this.interactions?.destroy());
  }
}
export {
  vt as Live2DManager
};
