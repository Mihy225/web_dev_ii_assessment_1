# Web Development II — Assessment 1

Two React layout exercises based on the supplied assessment brief.

| Project | Layout |
| --- | --- |
| [Task 1 — Erased Tapes](assessment-1-clone-tasks/task-1-layout-in-react) | Editorial article with a three-column desktop layout, album artwork, author profile and reader comments. |
| [Task 2 — watch.it](assessment-1-clone-tasks/task-2-responsive-layouts) | Film catalogue with mobile, tablet and desktop card layouts. |

## Run locally

Open this folder in VS Code. Open a PowerShell terminal and move into the task folder you want to run. For example, to start Task 1:

```powershell
Set-Location .\assessment-1-clone-tasks\task-1-layout-in-react
npm.cmd ci
npm.cmd run dev
```

Open the local address printed by Vite. To run Task 2, use the same commands from a fresh terminal, replacing `task-1-layout-in-react` with `task-2-responsive-layouts` in the folder path. Run `npm.cmd run build` inside either task folder to build it for production.

The task folders contain their own written specifications and wireframes. For the film catalogue, check the layout at 360px and on both sides of the 720px and 1024px breakpoints. Search and Watch Now are visual controls for the layout exercise.
