import GetAssentos from "./../data/GetAssentos";
import { useParams } from "react-router-dom";

export default function Sessao() {
  const { idSessao } = useParams();

  return (
    <>
      <main>
        <div className="titulo">
          <p>Selecione o(s) assento(s)</p>
        </div>
        <GetAssentos idSessao={idSessao} />
      </main>
    </>
  );
}
