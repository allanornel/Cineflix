import { Link, useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();
  console.log(location);
  const { nome, cpf, dia, titulo, hora, ids } = location.state;
  return (
    <main className="sucesso">
      <h1 className="titulo">Pedido feito com sucesso!</h1>
      <h2>Filme e sessão</h2>
      <p>{titulo} </p>
      <p>
        {dia} {hora}
      </p>
      <h2>Ingressos</h2>
      {ids.map((id) => (
        <p> Asssento {id}</p>
      ))}
      <h2>Comprador</h2>
      <p>Nome: {nome}</p>
      <p>CPF: {cpf}</p>
      <Link to="/">
        <button>Voltar pra Home</button>
      </Link>
    </main>
  );
}
