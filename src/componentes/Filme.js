// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GetSessoes from "../data/GetSessoes";

export default function Filme() {
  const { idFilme } = useParams();
  return (
    <>
      <div className="titulo">
        <p>Selecione o horário</p>
      </div>
      <GetSessoes idFilme={idFilme} />
    </>
  );
}
