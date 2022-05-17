import React from "react";
import Router from "./router/Router";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;