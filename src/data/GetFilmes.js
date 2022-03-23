import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GetFilmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    requisicao.then((resposta) => {
      setFilmes(resposta.data);
    });
  }, []);
  if (filmes === [] || filmes === null || filmes.length === 0) {
    return (
      <>
        <p>LOADING FILMES...</p>
      </>
    );
  } else {
    return filmes.map((filme) => {
      return (
        <Link key={filme.id} to={`/filme/${filme.id}`}>
          <div className="container-filme">
            <img src={filme.posterURL} alt="" />
          </div>
        </Link>
      );
    });
  }
}
