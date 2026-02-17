import { changedRows } from "../domain";
import { useAppStore } from "../store";

export function DiffPanel() {
  const rows = useAppStore((s) => s.rows);
  const select = useAppStore((s) => s.select);
  const changed = changedRows(rows);

  return (
    <div>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <strong>Diff (Baseline → Scenario A)</strong>
        <span className="badge">{changed.length} changed</span>
      </div>

      {changed.length === 0 ? (
        <p className="small">
          No changes yet. Edit Scenario A values to see diffs here.
        </p>
      ) : (
        <div style={{ marginTop: 8 }}>
          {changed.map((r) => (
            <div key={r.id} className="diffItem" onClick={() => select(r.id)}>
              <div>
                <div>
                  <strong>{r.name}</strong>
                </div>
                <div className="small">
                  {r.baseline} → {r.scenarioA}
                </div>
              </div>
              <span className="badge">view</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
