// src/pages/Dashboard.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/cardSidebar/Sidebar";
import "../styles/global.css";
import ConfirmModal from '../components/cardModal/ConfirmModal';

function Dashboard() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseToDeleteId, setCaseToDeleteId] = useState(null);
  const [casos] = useState([
    // ... seus casos aqui
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
  ]);

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

  const handleClickNovoCaso = () => {
    navigate('/gerar-novo-caso');
  };
  //Modal para confirmação para abrir e pega o id de caso. obs: não sei com cada caso ta referenciado no back.
  const openDeleteModal = (id) => {
    setCaseToDeleteId(id);
    setIsModalOpen(true);
  };
  // Modal de cancelar e fechar o modal
  const closeDeleteModal = () => {
    setIsModalOpen(false);
    setCaseToDeleteId(null);
  };

  // Confirmar deletação
  const confirmDeleteCase = () => {
    // Lógica para excluir o caso com o ID 'caseToDeleteId'
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="content-container">
        <div className="header-dashboard">
          <div>
            <h2> Casos em andamento </h2>
            <p className="subtitulo"> Casos</p>
          </div>
          <button className="btn" onClick={handleClickNovoCaso}>criar novo caso </button>
        </div>

        <div className="cards-container">
          {casos.map((caso) => (
            <div key={caso.id} className="card">
              <h3>{caso.titulo}</h3>
              <p className="data">{caso.data}</p>
              <p className="descricao">{caso.descricao}</p>
              <span className={`status ${getStatusClass(caso.status)}`}>
                {caso.status}
              </span>
              <div className="card-actions">
                <Link to={`/detalhamento/${caso.id}`} className="detalhes">
                  Ver detalhes
                </Link>
                <button onClick={() => openDeleteModal(caso.id)} className="delete-button">
                    <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteCase}
        message={`Tem certeza que deseja excluir o caso ${caseToDeleteId}?`}
      />
    </div>
  );
}

export default Dashboard;