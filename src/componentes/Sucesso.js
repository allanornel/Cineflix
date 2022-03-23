import { Link } from "react-router-dom";

export default function Sucesso() {
  return (
    <main className="sucesso">
      <h1 className="titulo">Pedido feito com sucesso!</h1>
      <h2>Filme e sessão</h2>
      <p>Enola Holmes </p>
      <p>24/06/2021 15:00</p>
      <h2>Ingressos</h2>
      <p>Assento 15</p>
      <p>Assento 16</p>
      <h2>Comprador</h2>
      <p>Nome: João da Silva Sauro</p>
      <p>CPF: 123.456.789-10</p>
      <Link to="/">
        <button>Voltar pra Home</button>
      </Link>
    </main>
  );
}
