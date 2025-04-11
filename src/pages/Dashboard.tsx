// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Button from "../components/buttons/Button.jsx";
import "../styles/Dashboard.css";
import CaseCard from "../components/caseCard/CaseCard.jsx";

function Dashboard() {
  const casos = [
    //casos
    {
      id: 1,
      titulo: "Identificação de vítima",
      data: "02/05/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Concluído",
    },
    {
      id: 2,
      titulo: "Lesão Odontológica",
      data: "02/05/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Fechado",
    },
    {
      id: 3,
      titulo: "Análise de Mordida",
      data: "02/05/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Em andamento",
    },
    {
      id: 4,
      titulo: "Identificação de vítima",
      data: "02/05/2023",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Concluído",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Concluído":
        return "status-concluido";
      case "Fechado":
        return "status-fechado";
      case "Em andamento":
        return "status-andamento";
      default:
        return "";
    }
  };
  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}
      <div className="content-container">
        <div className="header-dashboard">
          <div>
            <h2> Casos em andamento </h2>
            <p className="subtitulo"> Casos</p>
          </div>
          <Button text="Criar novo caso" />
        </div>

        <div className="cards-container">
          {casos.map((caso) => (
            <CaseCard
              key={caso.id}
              caso={caso}
              getStatusClass={getStatusClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
