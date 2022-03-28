import { useState } from "react";

export default function Assento({
  isAvailable,
  id,
  name,
  idSelecionados,
  setIdSelecionados,
}) {
  const [selecionado, setSelecionado] = useState("");

  return (
    <>
      <div
        onClick={() => clicarAssento(isAvailable, id, selecionado)}
        key={id}
        className={
          isAvailable ? "assento" + selecionado : "assento indisponivel"
        }
      >
        <p>{name}</p>
      </div>
    </>
  );
  function clicarAssento(disponivel, id, selecionado) {
    if (disponivel) {
      if (selecionado === "") {
        setSelecionado(" selecionado");
        setIdSelecionados([...idSelecionados, id]);
      } else {
        setSelecionado("");
        let newArr = idSelecionados.filter(
          (idSelecionado) => idSelecionado !== id
        );
        setIdSelecionados(newArr);
      }
    }
  }
}
