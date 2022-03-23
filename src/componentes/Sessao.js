import { Link } from "react-router-dom";

export default function Sessao() {
  const dataAssento = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  return (
    <main>
      <div className="titulo">
        <p>Selecione o(s) assento(s)</p>
      </div>
      <div className="container-assentos">
        {dataAssento.map((assento) => {
          if (assento === 15 || assento === 16) {
            return (
              <div className="assento selecionado">
                <p>{assento}</p>
              </div>
            );
          }
          if (assento === 30) {
            return (
              <div className="assento indisponivel">
                <p>{assento}</p>
              </div>
            );
          }
          return (
            <div className="assento">
              <p>{assento}</p>
            </div>
          );
        })}
      </div>
      <div className="legendas">
        <div className="legenda">
          <div className="circle selecionado"></div>
          <p>Selecionado</p>
        </div>
        <div className="legenda">
          <div className="circle disponivel"></div>
          <p>Disponível</p>
        </div>
        <div className="legenda">
          <div className="circle indisponivel"></div>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="sessao-inputs">
        <p>Nome do comprador:</p>
        <input type="text" placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input type="text" placeholder="Digite seu CPF..."></input>
        <Link to="/sucesso">
          <button>Reservar assento(s)</button>
        </Link>
      </div>
    </main>
  );
}
