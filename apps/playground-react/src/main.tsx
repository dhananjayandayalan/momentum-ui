import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@momentum-ui/core-css/styles.css";
import { App } from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
