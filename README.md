# Scenario Planner UI (Grid + Graph)

A frontend-biased fullstack portfolio project inspired by Fluxion-style workflows: a **data-heavy UI** where users model scenarios using an editable **grid/table** and a connected **graph view**, with room to add **AI-assisted scenario generation**.

> Goal: turn complex models into an intuitive, responsive user experience.

---

## Screenshot

![Scenario Planner UI](./Capture.PNG)

---

## Features

### ✅ Grid / Table
- Editable parameters (name, baseline, scenario)
- Inline validation + clear UX states
- Search/filter parameters
- Row selection synced with graph interactions

### ✅ Scenario workflow
- Baseline vs Scenario A values
- Diff view to review what changed (Baseline → Scenario A)
- Reset Scenario A to baseline

### ✅ Graph
- Nodes/edges representation of the model
- Click node ↔ highlights the corresponding table row
- Zoom/pan + controls (via React Flow)

---

## Tech Stack
- React + TypeScript (Vite)
- Zustand (state management)
- TanStack Table (grid/table rendering + filtering)
- React Flow (@xyflow/react) (graph UI)

---

## Project Structure
