import React from "react";
import Router from "./router/Router";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/Theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;