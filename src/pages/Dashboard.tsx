// src/pages/Dashboard.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/global.css";
import ConfirmModal from '../components/cardModal/Modal';
import apiRoutes from "../api/routes.js"; // Importando as rotas da API
import CaseCard from "../components/caseCard/CaseCard.jsx";

function Dashboard() {

  const navigate = useNavigate();
  const tipoUsuario = localStorage.getItem("tipoUsuario")?.toLowerCase();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseToDeleteId, setCaseToDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const casesData = await apiRoutes.getCases(); // Await the Promise
        setData(casesData);
      } catch (err) {
        console.error("Failed to fetch cases:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading cases...</div>;
  if (error) return <div>Error: {error}</div>;

  // const [casos] = useState([
  //   // ... seus casos aqui
  //   {
  //     id: 1,
  //     titulo: "Identificação de vítima",
  //     data: "02/05/2023",
  //     localizacao: "Rua 1",
  //     descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     status: "Concluído",
  //   },
  //   {
  //     id: 2,
  //     titulo: "Lesão Odontológica",
  //     data: "02/05/2023",
  //     localizacao: "Rua 2",
  //     descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     status: "Fechado",
  //   },
  //   {
  //     id: 3,
  //     titulo: "Análise de Mordida",
  //     data: "02/05/2023",
  //     localizacao: "Rua 3",
  //     descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     status: "Em andamento",
  //   },
  //   {
  //     id: 4,
  //     titulo: "Identificação de vítima",
  //     data: "02/05/2023",
  //     localizacao: "Rua 4",
  //     descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     status: "Concluído",
  //   },
  // ]); 

  //Lógica do status, porém ja vem dos dados 
  const getStatusClass = (status) => {
    switch (status) {
      case "Aberto":
        return "status-aberto";
      case "Fechado":
        return "status-fechado";
      case "Em Análise":
        return "status-em-análise";
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
          {tipoUsuario !== "assistente" && (
            <button className="btn" onClick={handleClickNovoCaso}>criar novo caso </button>
          )}
        <div className="cards-container">
          {data.map((caso) => (
            <CaseCard
              key={caso._id}
              titulo={caso.titulo}
              data={caso.createdAt}
              localizacao={caso.localizacao}
              descricao={caso.descricao}
              status={caso.status}
              customClass={getStatusClass(caso.status)}
              onDelete={() => openDeleteModal(caso.id)} // Passa o ID do caso para a função de abrir o modal
            	linkTo={`/detalhamento/${caso._id}`}
            />
          ))}
        </div>
        </div>



      </div>
    </div>
  );
}

export default Dashboard;