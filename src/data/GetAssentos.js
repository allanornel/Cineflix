import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Assento from "./../componentes/Assento";

export default function GetAssentos({ idSessao }) {
  const [assentos, setAssentos] = useState([]);
  const [idSelecionados, setIdSelecionados] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();

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
        <div className="container-assentos">
          {assentos.seats.map((assento) => {
            return (
              <Assento
                key={assento.id}
                id={assento.id}
                isAvailable={assento.isAvailable}
                name={assento.name}
                idSelecionados={idSelecionados}
                setIdSelecionados={setIdSelecionados}
              />
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
          <input
            type="text"
            value={nome}
            placeholder="Digite seu nome..."
            onChange={(e) => setNome(e.target.value)}
          />
          <p>CPF do comprador:</p>
          <input
            type="text"
            value={cpf}
            placeholder="Digite seu CPF..."
            onChange={(e) => setCpf(e.target.value)}
          />
          <button onClick={() => botaoSucesso(idSelecionados, nome, cpf)}>
            Reservar assento(s)
          </button>
        </div>

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
  function botaoSucesso(idSelecionados, nome, cpf) {
    let obj = { ids: idSelecionados, nome: nome, cpf: cpf };
    let objNavigate = {
      ids: idSelecionados,
      nome: nome,
      cpf: cpf,
      titulo: assentos.movie.title,
      dia: assentos.day.weekday,
      hora: assentos.name,
    };
    const requisicaoPost = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      obj
    );
    requisicaoPost.then(() => {
      navigate("/sucesso", { state: objNavigate });
    });
    requisicaoPost.catch((resposta) => console.log(resposta));
  }
}
