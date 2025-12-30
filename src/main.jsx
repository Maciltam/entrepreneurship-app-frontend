import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { darkTheme } from "./themes/themes.js";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
