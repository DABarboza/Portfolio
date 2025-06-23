import React from "react";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <Router />
    </App>
  </StrictMode>
);
