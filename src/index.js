import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material";
import {  ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
