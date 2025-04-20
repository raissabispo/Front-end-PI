import React from "react";
import Sidebar from "../cardSidebar/Sidebar";
import "../cardDetalhamento/Detalhamento.css";
import { useParams } from "react-router-dom";

const casos = [
  { id: 1, titulo: "Identificação de vítima", responsavel: "Dr. A", status: "Concluído", localizacao: "Rua 1", descricao: "Detalhes do caso 1", data: "01/01/2023", informacao: "Info 1", imagem: "img1.jpg" },
  { id: 2, titulo: "Lesão Odontológica", responsavel: "Dra. B", status: "Fechado", localizacao: "Rua 2", descricao: "Detalhes do caso 2", data: "02/01/2023", informacao: "Info 2", imagem: "img2.jpg" },
  { id: 3, titulo: "Análise de Mordida", responsavel: "Dr. C", status: "Em andamento", localizacao: "Rua 3", descricao: "Detalhes do caso 3", data: "03/01/2023", informacao: "Info 3", imagem: "img3.jpg" },
  { id: 4, titulo: "Identificação de vítima", responsavel: "Dra. D", status: "Concluído", localizacao: "Rua 4", descricao: "Detalhes do caso 4", data: "04/01/2023", informacao: "Info 4", imagem: "img4.jpg" },
];

function DetalhamentoCaso() {
  const { id } = useParams();
  const caso = casos.find((c) => c.id === parseInt(id));

  if (!caso) return <p>Caso não encontrado</p>;

  return (
    <div className="container">
      <Sidebar />
      <div className="container-dtn">
        <h2>{caso.titulo}</h2>
        
        <div className="detalhamento-grid">
          <div className="item">
            <span className="dtn-label">Responsável:</span>
            <span className="dtn-value">{caso.responsavel}</span>
          </div>

          <div className="item">
            <span className="dtn-label">Status:</span>
            <span className="dtn-value">{caso.status}</span>
          </div>

          <div className="item">
            <span className="dtn-label">Localização:</span>
            <span className="dtn-value">{caso.localizacao}</span>
          </div>

          <div className="item">
            <span className="dtn-label">Data:</span>
            <span className="dtn-value">{caso.data}</span>
          </div>

          <div className="item full">
            <span className="dtn-label">Descrição:</span>
            <span className="dtn-value">{caso.descricao}</span>
          </div>

          <div className="item full">
            <span className="dtn-label">Informações:</span>
            <span className="dtn-value">{caso.informacao}</span>
          </div>

          <div className="item full">
            <span className="dtn-label">Imagem:</span>
            <span className="dtn-value">{caso.imagem}</span>
          </div>
        </div>

        <button className="btn">Baixar Anexos</button>
      </div>
    </div>
  );
}

export default DetalhamentoCaso;
