import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/Detalhamento.css";
import Button from "../components/buttons/Button";
import CaseDetails from "../components/caseDetails/CaseDetails";
import CaseDetailsCard from "../components/caseDetailsCard/caseDetailsCard";

function DetalhamentoCaso() {
  const caso = {
    nome: "Caso 1",
    responsavel: "Dr. Silva",
    status: "Em andamento",
    localizacao: "Rua X, 123",
    descricao: "Descrição detalhada do caso...",
    data: "Dia do ocorrido ",
    informacao: "Informações adicionas",
    imagem: "imagem da evidencia",
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}
      <CaseDetailsCard caso={caso}/>
    </div>
  );
}

export default DetalhamentoCaso;
