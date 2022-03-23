import GetFilmes from "../data/GetFilmes";

export default function PaginaInicial() {
  return (
    <main>
      <div className="titulo">
        <p>Selecione o filme</p>
      </div>
      <div className="container-filmes">
        <GetFilmes />
      </div>
    </main>
  );
}
