import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const them = createMuiTheme({
  palette: {
    primary: {
      main: "#DC3838",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={them}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
