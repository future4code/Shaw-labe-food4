import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme/theme";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>

      <GlobalState>
       <Router/>
      </GlobalState>

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;