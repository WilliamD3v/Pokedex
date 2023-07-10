import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { RoutesPrimer } from "./routes";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesPrimer/>
  </React.StrictMode>
);
