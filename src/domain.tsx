export type ParamId = string;

export type ParamRow = {
  id: ParamId;
  name: string;
  baseline: number;
  scenarioA: number;
};

export type FieldErrors = Partial<Record<keyof ParamRow, string>>;

export function validateRow(r: ParamRow): FieldErrors {
  const errors: FieldErrors = {};
  if (!r.name.trim()) errors.name = "Name is required";
  if (!Number.isFinite(r.baseline))
    errors.baseline = "Baseline must be a number";
  if (!Number.isFinite(r.scenarioA))
    errors.scenarioA = "Scenario A must be a number";
  return errors;
}

export function changedRows(rows: ParamRow[]) {
  return rows.filter((r) => r.baseline !== r.scenarioA);
}

export function safeParseNumber(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const n = Number(trimmed);
  return Number.isFinite(n) ? n : null;
}
