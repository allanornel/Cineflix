import React from "react";

import "../assets/css/reset.css";
import "../assets/css/style.css";
import Filme from "./Filme";
import PaginaInicial from "./PaginaInicial";

export default function App() {
  return (
    <>
      <header>
        <h1>CINEFLIX</h1>
      </header>
      {/* <PaginaInicial /> */}
      <Filme />
    </>
  );
}
