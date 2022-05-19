import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [products, setProducts] = useState([])
    const [idRest, setIdRest] = useState(0)

    const states = {products, idRest}
    const setter = {setProducts, setIdRest}

  return (
    <GlobalContext.Provider value={{ states, setter }}>
      {props.children}
    </GlobalContext.Provider>
  );
} 