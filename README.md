# Scenario Planner UI (Grid + Graph)

A frontend-biased fullstack portfolio project inspired by Fluxion-style workflows: a **data-heavy UI** where users model scenarios using an editable **grid/table** and a connected **graph view**, with room to add **AI-assisted scenario generation**.

> Goal: turn complex models into an intuitive, responsive user experience.

---

## Screenshot

![Scenario Planner UI](./Capture.PNG)

Scenario Planner UI
Overview

Scenario Planner UI is a data-intensive web application that allows users to model alternative scenarios by editing structured parameters in a tabular grid and visualizing dependencies in a linked graph view.

The goal of the project is to explore how complex, interdependent data can be edited and reviewed safely while maintaining consistency across different visual representations.

What the Project Does

Provides an editable grid interface for structured parameter input

Visualizes relationships between entities using a connected graph view

Maintains synchronization between grid and graph representations

Validates changes before applying them to prevent inconsistent state

Supports baseline vs scenario comparison workflows

The focus of the project is on data integrity, state management, and predictable UI behavior.

Technologies Used

React

TypeScript

REST-based backend validation (mocked/local API structure)

Modular component architecture

Structured state management patterns

How to Run the Project

Clone the repository
git clone http://github.com/Awais-Baddar/scenario-planner-ui

Navigate to the project directory
cd scenario-planner-ui

Install dependencies
npm install

Start the development server
npm run dev

Open the application in your browser (default: http://localhost:5173
)

My Contribution

This is a personal project that I designed and implemented independently.

My responsibilities included:

Designing the overall architecture

Defining data models and state structure

Implementing the editable grid and validation logic

Building synchronization logic between grid and graph

Refactoring state flow to improve predictability and reduce side effects

Reflection

The main technical challenge was maintaining consistent state between multiple views of shared data. Through refactoring and restructuring data flow, I improved reliability and reduced hidden UI bugs.

If revisited, I would add stronger automated tests around state transitions and further separate business logic from UI components.
