import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState><App /></GlobalState>
    </StrictMode>
    ,
  </BrowserRouter>
);
