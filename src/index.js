import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
