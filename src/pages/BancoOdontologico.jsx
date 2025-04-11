import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/BancoOdontologico.css";
import ButtonOnClick from "../components/buttons/ButtonOnClick";
import SearchInput from "../components/searchInput/SearchInput";

function BancoOdontologico() {
  const [pesquisa, setPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleSearch = () => {
    console.log("Pesquisando casos:", pesquisa);
    setResultados([
      { nome: "Caso 1", responsavel: "Dr. Silva" },
      { nome: "Caso 2", responsavel: "Dr. Souza" },
    ]);
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}
      <div className="banco-container">
        <SearchInput
          type="text"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          placeholder="Pesquisar casos"
        />
        <ButtonOnClick text="Pesquisar" onClick={handleSearch} />
        <div className="resultados">
          {resultados.map((caso, index) => (
            <div key={index}>
              <h3>{caso.nome}</h3>
              <p>{caso.responsavel}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BancoOdontologico;
