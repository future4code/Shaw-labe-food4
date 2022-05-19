import React from "react";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./global/GlobalState";

function App() {
  return (
    <BrowserRouter>
      <GlobalState>
       <Router/>
      </GlobalState>
    </BrowserRouter>
  );
}

export default App;