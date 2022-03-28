// import { useState, useEffect } from "react";
import axios from "axios";

export default function postAssentos(obj) {
  console.log(obj);
  const requisicao = axios.post(
    "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
    obj
  );
  requisicao.then(console.log("Post feito com sucesso"));
  requisicao.catch((resposta) => console.log(resposta));
}
