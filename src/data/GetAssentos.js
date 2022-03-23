import { useState, useEffect } from "react";
import axios from "axios";

export default function GetAssentos({ idSessao }) {
  const [assentos, setAssentos] = useState([]);
  const [selecionado, setSelecionado] = useState("");
  // const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );

    requisicao.then((resposta) => {
      setAssentos(resposta.data);
    });
  }, [idSessao]);
  if (assentos === [] || assentos === null || assentos.length === 0) {
    return (
      <>
        <p>LOADING Assentos...</p>
      </>
    );
  } else {
    return (
      <>
        {assentos.seats.map((assento) => {
          return (
            <div
              onClick={clicarAssento(assento.isAvailable)}
              key={assento.id}
              className={
                assento.isAvailable
                  ? "assento" + selecionado
                  : "assento indisponivel"
              }
            >
              <p>{assento.name}</p>
            </div>
          );
        })}
        <footer>
          <div className="container-filme">
            <img src={assentos.movie.posterURL} alt="" />
          </div>
          <div>
            <p>{assentos.movie.title}</p>
            <p>
              {assentos.day.weekday} - {assentos.name}
            </p>
          </div>
        </footer>
      </>
    );
  }

  function clicarAssento(disponivel, id) {
    // if (disponivel) {
    //   if (selecionado === " selecionado") {
    //     setSelecionado("");
    // } else {
    //        setSelecionado(" selecionado");
    // }
  }
}
