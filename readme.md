# Scenario Planner UI (Grid + Graph)

A frontend-biased fullstack portfolio project: a data-heavy UI where users model scenarios using an editable **grid/table** and a connected **graph view**, with optional **AI-assisted workflows** to propose scenario changes.

## Why this project
Fluxion-style product problem: turn complex models into an intuitive, responsive experience.

## Features (current + planned)
### Grid / Table
- [ ] Editable rows/cells (parameters)
- [ ] Filter / sort / search
- [ ] Validation + error states
- [ ] Scenario versioning (Baseline vs Scenario A)
- [ ] Diff view (what changed)

### Graph
- [ ] Nodes/edges view of model relationships
- [ ] Click node ↔ highlight table row
- [ ] Zoom/pan + selection

### AI-assisted workflows
- [ ] "Generate scenario" (text → structured changes)
- [ ] Review/approve before apply
- [ ] Explain changes (why these parameters changed)

## Tech stack
- React + TypeScript
- State: (Zustand / Redux Toolkit)
- Table: (TanStack Table + virtualization)
- Graph: (React Flow / Cytoscape / D3)
- API: (mock JSON server / Node/Express)

## Getting started
```bash
npm install
npm run dev
