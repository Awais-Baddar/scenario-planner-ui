import { ParamsTable } from "./components/ParamTable";
import { ModelGraph } from "./components/ModelGraph";
import { DiffPanel } from "./components/DiffPanel";
import { useAppStore } from "./store";

export default function App() {
  const addRow = useAppStore((s) => s.addRow);
  const resetScenarioA = useAppStore((s) => s.resetScenarioA);
  const query = useAppStore((s) => s.query);
  const setQuery = useAppStore((s) => s.setQuery);

  return (
    <div className="container">
      <div className="header">
        <div className="headerLeft">
          <h2 className="title">Scenario Planner UI</h2>
          <div className="small">Data-heavy grid + graph prototype</div>
        </div>

        <div className="row headerActions">
          <input
            className="searchInput"
            placeholder="Search parameter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn" onClick={addRow}>
            Add parameter
          </button>
          <button className="btn" onClick={resetScenarioA}>
            Reset Scenario A
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="card tableCard">
          <h3 className="cardTitle">Grid / Table</h3>
          <ParamsTable />
        </div>

        <div className="card diffCard">
          <h3 className="cardTitle">Diff</h3>
          <DiffPanel />
        </div>

        <div className="card graphCard">
          <h3 className="cardTitle">Graph</h3>
          <ModelGraph />
        </div>
      </div>
    </div>
  );
}
