import React, { useState } from "react";
import "../caseDetailsCard/Detalhes.css";
import { useParams } from "react-router-dom";
import apiRoutes from "../../api/routes"; // Importando as rotas da API
import { useEffect } from "react";
import {useNavigate} from "react-router"; // Importando o useNavigate para redirecionar após a exclusão
import useUserData from "../../hooks/useUserData";

function DetalhamentoCaso() {
  const { id } = useParams();
  const [caso, setCaso] = useState(null); //estado para guardar o caso que vem da API
  const [file, setFile] = useState(null); //guardar o arquivo que foi adicionado 
  const [loading, setLoading] = useState(true); //estado de carregamento
  const [error, setError] = useState(null); //estado de erro
  const navigate = useNavigate(); //hook para redirecionar após a exclusão
  const userData = useUserData(); //hook para pegar os dados do usuário logado

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
      setCaso((prevCasos) => prevCasos.filter(caso => caso._id !== id)); // Remove da lista local
      navigate(`/dashboard/${userData.id}`); // Redireciona para a página inicial após a exclusão
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
            <span className="dtn-value">{caso.responsavel.nome}</span>
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
      <div className="item">
        <div className="upload">
          <h3>Adicionar nova evidencia</h3>
          <input type="file" onChange={handleChange} />
          <button className="btn" onClick={handleUpload}> Enviar evidência</button>
        </div>
      </div>
      <button className="btn" onClick={() => handleDelete(caso._id)}>Deletar Caso<i class="fa-solid fa-trash"></i></button>
    </div>
  );
  
}

export default DetalhamentoCaso;