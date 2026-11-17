export interface CompanionTask { id: string; title: string; dueAt?: string; done: boolean; reminded: boolean }
export interface CompanionState { schema: 1; autoReturn: boolean; random: boolean; roam: boolean; city: string; tasks: CompanionTask[] }
export const COMPANION_STATE_KEY = "takina-companion:v1";

export function parseCompanionState(value: unknown): CompanionState {
  const state: CompanionState = { schema: 1, autoReturn: true, random: true, roam: false, city: "", tasks: [] };
  if (!value || typeof value !== "object" || !("schema" in value) || value.schema !== 1) return state;
  const raw = value as Partial<CompanionState>;
  for (const key of ["autoReturn", "random", "roam"] as const) if (typeof raw[key] === "boolean") state[key] = raw[key];
  if (typeof raw.city === "string") state.city = raw.city.slice(0, 80);
  if (Array.isArray(raw.tasks)) {
    const ids = new Set<string>();
    for (const task of raw.tasks) {
      if (!task || typeof task.id !== "string" || !task.id || task.id.length > 100 || ids.has(task.id) || typeof task.title !== "string" || !task.title.trim()) continue;
      ids.add(task.id);
      state.tasks.push({ id: task.id, title: task.title.trim().slice(0, 200), done: task.done === true, reminded: task.reminded === true,
        ...(typeof task.dueAt === "string" && Number.isFinite(Date.parse(task.dueAt)) ? { dueAt: new Date(task.dueAt).toISOString() } : {}) });
      if (state.tasks.length === 50) break;
    }
  }
  return state;
}

export function loadCompanionState(): CompanionState {
  try { return parseCompanionState(JSON.parse(localStorage.getItem(COMPANION_STATE_KEY) ?? "null")); }
  catch { return parseCompanionState(null); }
}
export function saveCompanionState(state: CompanionState): boolean {
  try { localStorage.setItem(COMPANION_STATE_KEY, JSON.stringify(state)); return true; } catch { return false; }
}
