import React, { useState } from "react";
import "../caseDetailsCard/Detalhes.css";
import { useParams } from "react-router-dom";
import apiRoutes from "../../api/routes"; // Importando as rotas da API
import { useEffect } from "react";
import {useNavigate} from "react-router"; // Importando o useNavigate para redirecionar após a exclusão

// //dados postiços, só para ter uma noção de como ficaria 
// const casos = [
//   { id: 1, titulo: "Identificação de vítima", responsavel: "Dr. A", status: "Concluído", localizacao: "Rua 1", descricao: "Detalhes do caso 1", data: "01/01/2023", informacao: "Info 1", imagem: "img1.jpg" },
//   { id: 2, titulo: "Lesão Odontológica", responsavel: "Dra. B", status: "Fechado", localizacao: "Rua 2", descricao: "Detalhes do caso 2", data: "02/01/2023", informacao: "Info 2", imagem: "img2.jpg" },
//   { id: 3, titulo: "Análise de Mordida", responsavel: "Dr. C", status: "Em andamento", localizacao: "Rua 3", descricao: "Detalhes do caso 3", data: "03/01/2023", informacao: "Info 3", imagem: "img3.jpg" },
//   { id: 4, titulo: "Identificação de vítima", responsavel: "Dra. D", status: "Conclauído", localizacao: "Rua 4", descricao: "Detalhes do caso 4", data: "04/01/2023", informacao: "Info 4", imagem: "img4.jpg" },
// ];

function DetalhamentoCaso() {
  const { id } = useParams();
  const [caso, setCaso] = useState(null); //estado para guardar o caso que vem da API
  const [casos, setCasos] = useState([]); //estado para guardar todos os casos que vem da API
  const [file, setFile] = useState(null); //guardar o arquivo que foi adicionado 
  const [loading, setLoading] = useState(true); //estado de carregamento
  const [error, setError] = useState(null); //estado de erro
  const [data, setData] = useState([]); //estado para guardar os dados que vem da API
  const navigate = useNavigate(); //hook para redirecionar após a exclusão

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRoutes.getCasesById(id); //chama a rota da API para pegar o caso pelo ID
        setCaso(response); //seta o caso que vem da API
        setLoading(false); //seta o loading como false
      } catch (error) {
        console.error("Erro ao buscar o caso:", error); //se der erro, mostra no console
      }
    }
    fetchData(); //chama a função que busca os dados
  }, [id]); //passa o ID como dependência para a função useEffect, assim ele vai buscar os dados toda vez que o ID mudar

  const handleDelete = async (id) => {
    try {
      await apiRoutes.deleteCase(id); // Chama a API para deletar
      setCasos((prevCasos) => prevCasos.filter(caso => caso._id !== id)); // Remove da lista local
      navigate("/dashboard"); // Redireciona para a página inicial após a exclusão
    } catch (error) {
      console.error("Erro ao deletar o caso:", error);
      setError(error);
    }
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Arquivo enviado:", file.name);
      alert(`Arquivo" ${file.name}" enviado com sucesso`);
      setFile(null);
    } else {
      alert("Por favor, selecione um arquivo para enviar.")
    }
  };

  if (loading) return <div>Loading cases...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
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
            <span className="dtn-value">{caso.location}</span>
          </div>

          <div className="item">
            <span className="dtn-label">Data:</span>
            <span className="dtn-value">{caso.createdAt}</span>
          </div>

          <div className="item full">
            <span className="dtn-label">Descrição:</span>
            <span className="dtn-value">{caso.descricao}</span>
          </div>

          <div className="item full">
            <span className="dtn-label">Imagem:</span>
            <span className="dtn-value">{caso.imagem}</span>
          </div>
        </div>
      </div>
      <button className="btn-delete" onClick={() => handleDelete(caso._id)}>Deletar Caso</button>
      <div className="item">
        <div className="upload">
          <h3>Adicionar nova evidencia</h3>
          <input type="file" onChange={handleChange} />
          <button className="btn" onClick={handleUpload}> Enviar evidência</button>
        </div>
      </div>
    </div>
  );
  
}

export default DetalhamentoCaso;