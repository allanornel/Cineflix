import React from "react";
import image1 from "./../assets/img/filme1.png";
import image2 from "./../assets/img/filme2.png";

import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  return (
    <>
      <header>
        <h1>CINEFLIX</h1>
      </header>
      <main>
        <div className="titulo">
          <p>Selecione o filme</p>
        </div>
        <div className="container-filmes">
          <div className="container-filme">
            <img src={image1} alt="" />
          </div>
          <div className="container-filme">
            <img src={image2} alt="" />
          </div>
          <div className="container-filme">
            <img src={image1} alt="" />
          </div>
          <div className="container-filme">
            <img src={image2} alt="" />
          </div>
          <div className="container-filme">
            <img src={image1} alt="" />
          </div>
          <div className="container-filme">
            <img src={image2} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
