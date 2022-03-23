import { Link } from "react-router-dom";
import image1 from "./../assets/img/filme1.png";
import image2 from "./../assets/img/filme2.png";

export default function PaginaInicial() {
  return (
    <main>
      <div className="titulo">
        <p>Selecione o filme</p>
      </div>
      <div className="container-filmes">
        <Link to="/filme">
          <div className="container-filme">
            <img src={image1} alt="" />
          </div>
        </Link>
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
  );
}
