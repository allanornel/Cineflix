import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function GetSessoes({ idFilme }) {
  const [sessoes, setSessoes] = useState([]);
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    requisicao.then((resposta) => {
      setSessoes(resposta.data);
    });
  }, [idFilme]);

  if (sessoes === [] || sessoes === null || sessoes.length === 0) {
    return (
      <>
        <p>LOADING SESSOES...</p>
      </>
    );
  } else {
    return (
      <>
        <div className="container-horarios">
          {sessoes.days.map((day) => {
            return (
              <div key={day.id} className="container-dia">
                <p>
                  {day.weekday} - {day.date}
                </p>
                {day.showtimes.map((showtime) => (
                  <Link key={showtime.id} to={`/sessao/${showtime.id}`}>
                    <button>{showtime.name}</button>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <footer>
          <div className="container-filme">
            <img src={sessoes.posterURL} alt="" />
          </div>
          <p>{sessoes.title}</p>
        </footer>
      </>
    );
  }
}
