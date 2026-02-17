import { create } from "zustand";
import {type ParamRow, type ParamId, safeParseNumber } from "./domain.tsx";

type AppState = {
  rows: ParamRow[];
  selectedId: ParamId | null;
  query: string;

  setQuery: (q: string) => void;
  select: (id: ParamId | null) => void;

  addRow: () => void;
  removeRow: (id: ParamId) => void;

  updateName: (id: ParamId, name: string) => void;
  updateNumberField: (
    id: ParamId,
    key: "baseline" | "scenarioA",
    raw: string,
  ) => void;

  resetScenarioA: () => void;
};

const seed: ParamRow[] = [
  { id: "p1", name: "Price", baseline: 100, scenarioA: 100 },
  { id: "p2", name: "Demand", baseline: 250, scenarioA: 250 },
  { id: "p3", name: "Marketing", baseline: 40, scenarioA: 40 },
  { id: "p4", name: "Shipping", baseline: 15, scenarioA: 15 },
];

const uid = (): ParamId => Math.random().toString(36).slice(2, 10);

export const useAppStore = create<AppState>((set) => ({
  rows: seed,
  selectedId: null,
  query: "",

  setQuery: (q) => set({ query: q }),
  select: (id) => set({ selectedId: id }),

  addRow: () => {
    const id = uid();
    set((s) => ({
      rows: [
        { id, name: "New parameter", baseline: 0, scenarioA: 0 },
        ...s.rows,
      ],
      selectedId: id,
    }));
  },

  removeRow: (id) => {
    set((s) => ({
      rows: s.rows.filter((r) => r.id !== id),
      selectedId: s.selectedId === id ? null : s.selectedId,
    }));
  },

  updateName: (id, name) => {
    set((s) => ({
      rows: s.rows.map((r) => (r.id === id ? { ...r, name } : r)),
    }));
  },

  updateNumberField: (id, key, raw) => {
    const n = safeParseNumber(raw);
    if (n === null) return; // stable state; UI can show error if needed later
    set((s) => ({
      rows: s.rows.map((r) =>
        r.id === id ? ({ ...r, [key]: n } as ParamRow) : r,
      ),
    }));
  },

  resetScenarioA: () => {
    set((s) => ({
      rows: s.rows.map((r) => ({ ...r, scenarioA: r.baseline })),
    }));
  },
}));
