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
        {dataAssento.map((assento) => (
          <div className="assento">
            <p>{assento}</p>
          </div>
        ))}
      </div>
      <div className="legendas">
        <div className="legendas-selecionado">
          <div className="assento"></div>
          <p>Selecionado</p>
        </div>
        <div className="legendas-disponivel">
          <div className="assento"></div>
          <p>Disponível</p>
        </div>
        <div className="legendas-indisponivel">
          <div className="assento"></div>
          <p>Indisponível</p>
        </div>
      </div>
      <p>Nome do comprador:</p>
      <input
        type="text"
        placeholder="      Digite seu nome...
"
      ></input>
      <p>CPF do comprador:</p>
      Digite seu CPF...
      <button>Reservar assento(s)</button>
    </main>
  );
}
