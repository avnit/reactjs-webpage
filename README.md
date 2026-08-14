# reactjs-webpage

<!-- ARCH-DIAGRAM:START -->

## Architecture

> Auto-generated architecture diagram. See [`docs/context-map.md`](docs/context-map.md) for the full context map (core application, containers/cloud, and database connections).

```mermaid
flowchart TD
  User([User / Client])
  UI["Frontend:53<br/>React"]
  App["reactjs-webpage<br/><small>index.js</small><br/>Express / Node"]
  SVC0["AWS"]
  User --> UI
  UI --> App
  App --> SVC0
```

<!-- ARCH-DIAGRAM:END -->
