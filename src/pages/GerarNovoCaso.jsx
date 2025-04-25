import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import Sidebar from "../components/sidebar/Sidebar";
import "./../styles/global.css";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import SearchInput from "../components/searchInput/SearchInput";
import apiRoutes from "../api/routes";

function GerarNovoCaso() {
  const { id } = useParams(); // Extract id from URL
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("Aberto");
  const [dataAbertura, setDataAbertura] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const userId = userData?.id; // Usa optional chaining para evitar erros

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const caseData = {
        titulo,
        descricao,
        status,
        dataAbertura: dataAbertura ? new Date(dataAbertura).toISOString() : null,
        dataFechamento: null,
        localizacao,
        responsavel: id, // destacar o ID do usuário responsável
      };

      const response = await apiRoutes.createCaseByIdUser(id, caseData);
      setSuccess("Caso criado com sucesso!");
      setTitulo("");
      setDescricao("");
      setStatus("Aberto");
      setDataAbertura("");
      setLocalizacao("");

      console.log("Caso criado:", response);
    } catch (err) {
      setError("Erro ao criar o caso. Por favor, tente novamente.");
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="container">
        <h2>Adicionar Novo Caso</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="section-container">
            <div className="full">
              <label>Nome do Caso:</label>
              <SearchInput
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
              />
            </div>

            <div className="full">
              <label>Status:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="Aberto">Aberto</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Fechado">Fechado</option>
              </select>
            </div>
          </div>

          <div className="section-container">
            <div className="form-group">
              <label>Data de Abertura:</label>
              <SearchInput
                type="datetime-local"
                value={dataAbertura}
                onChange={(e) => setDataAbertura(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="section-container">
            <div className="form-group">
              <label>Localização:</label>
              <SearchInput
                type="text"
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Descrição:</label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows="5"
                className="form-textarea"
                required
              />
            </div>
          </div>

          <ButtonSubmit text="Adicionar Novo Caso" />
        </form>
      </div>
    </div>
  );
}

export default GerarNovoCaso;