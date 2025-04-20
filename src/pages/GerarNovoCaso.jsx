import React, { useState } from "react";
import Sidebar from "../components/cardSidebar/Sidebar";
import "../styles/global.css";

function GerarNovoCaso() {
  const [responsavel, setResponsavel] = useState("");
  const [nomeDoCaso, setNomeDoCaso] = useState("");
  const [data, setData] = useState("");
  const [cor, setCor] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setDescricao] = useState("");
  const [upload, setUpload] = useState("");
  const [sexoVitima, setSexoVitima] = useState("");
  const [causaMorte, setCausaMorte] = useState("");
  const [identificada, setIdentificada] = useState("");
  const [informacoes, setInformacoes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o carregamento da página
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="container">
        <h2>Adicionar Novo Caso</h2>

        <form onSubmit={handleSubmit}>
          
          {/* Seção de Identificação */}
          <div className="section-container">
            <h3>Identificação</h3>

            <label>Identificada</label>
            <select
              value={identificada}
              onChange={(e) => setIdentificada(e.target.value)}
              className="input"
            >
              <option value="">Selecione</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>

            <div className="full">
              <label>Nome do Caso:</label>
              <input
                type="text"
                value={nomeDoCaso}
                onChange={(e) => setNomeDoCaso(e.target.value)}
              />
            </div>

            <div className="full">
              <label>Responsável:</label>
              <input
                type="text"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </div>
          </div>

          {/* Seção de Informações Básicas */}
          <div className="section-container">
            <div className="row">
              <div className="form-group">
                <label>Data:</label>
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Cor da Pele:</label>
                <select
                  value={cor}
                  onChange={(e) => setCor(e.target.value)}
                  className="input"
                >
                  <option value="">Selecione</option>
                  <option value="Branca">Branca</option>
                  <option value="Parda">Parda</option>
                  <option value="Negra">Negra</option>
                  <option value="Amarela">Amarela</option>
                  <option value="Indígena">Indígena</option>
                </select>
              </div>

              <div className="form-group">
                <label>Hora:</label>
                <input
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Sexo da Vítima:</label>
              <select
                value={sexoVitima}
                onChange={(e) => setSexoVitima(e.target.value)}
                className="input"
              >
                <option value="">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
          </div>

          {/* Seção de Localização e Evidências */}
          <div className="section-container">
            <div className="form-group">
              <label>Local:</label>
              <input
                type="text"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Descrição:</label>
              <input
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Evidências:</label>
              <input
                type="file"
                accept="image/*, .pdf, .doc, .docx"
                onChange={(e) => setUpload(e.target.files[0])}
                multiple
              />
            </div>

            <div className="row">
              <div className="form-group">
                <label>Causa da Morte:</label>
                <input
                  type="text"
                  value={causaMorte}
                  onChange={(e) => setCausaMorte(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Informações:</label>
                <input
                  type="text"
                  value={informacoes}
                  onChange={(e) => setInformacoes(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button className="btn" type="submit">Adicionar Novo Caso</button>
        </form>
      </div>
    </div>
  );
}

export default GerarNovoCaso;
