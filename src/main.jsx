import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DataLayer } from "../DataLayer/Datalayer";
import reducer, { initialState } from "../DataLayer/reducer";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </DataLayer>
    </BrowserRouter>
  </React.StrictMode>
);
