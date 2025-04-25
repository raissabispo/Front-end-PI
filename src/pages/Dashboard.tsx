// src/pages/Dashboard.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/global.css";
import ConfirmModal from '../components/cardModal/Modal';
import apiRoutes from "../api/routes.js"; // Importando as rotas da API
import CaseCard from "../components/caseCard/CaseCard.jsx";
import useUserData from "../hooks/useUserData.jsx";

function Dashboard() {

  const navigate = useNavigate();
  const tipoUsuario = localStorage.getItem("tipoUsuario")?.toLowerCase();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [caseToDeleteId, setCaseToDeleteId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const userData = useUserData();

  useEffect(() => {
    // Só executa se userData estiver disponível
    if (!userData || !userData.id) return;
  
    const fetchCases = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Busca APENAS os casos do usuário responsável
        const cases = await apiRoutes.getCasesByUserId(userData.id);
        
        // Ordena por data (mais recente primeiro)
        const sortedCases = cases.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        
        setData(sortedCases);
  
      } catch (err) {
        console.error("Erro ao buscar casos:", err);
        setError(err.message || "Erro ao carregar casos");
      } finally {
        setLoading(false);
      }
    };
  
    fetchCases();
  }, [userData?.id]); // Executa quando o ID do usuário mudar

  if (loading) return <div>Loading cases...</div>;
  if (error) return <div>Error: {error}</div>;

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
    navigate(`/gerar-novo-caso/${userData.id}`);
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
            <h2> Área de Casos</h2>
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