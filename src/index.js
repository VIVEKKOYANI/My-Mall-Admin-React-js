import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { red, blueGrey } from "@material-ui/core/colors";

const them = createMuiTheme({
  palette: {
    primary: red,
    secondary: blueGrey,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={them}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
