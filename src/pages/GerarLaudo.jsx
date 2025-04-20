import React, { useState } from "react";
import Sidebar from "../components/cardSidebar/Sidebar"; 
import jsPDF from "jspdf";
import "../styles/global.css";

  const GerarLaudo = () => {
    const [dados, setDados] = useState({
      numeroCaso: '',
      dataPericia: '',
      horaPericia: '',
      localPericia: '',
      autoridadeRequisitante: '',
      peritosDesignados: '',
      pessoaPericiada: '',
      tipoExame: '',
      finalidade: '',
      quesitos: '',
  
      historico: '',
      descricao: '',
      discussao: '',
      conclusao: '',
      respostaQuesitos: '',
  
      identificacaoVitimado: '',
      papiloscopia: false,
      odontologico: false,
      dna: false,
      familiar: false,
      resultadoIdentificacao: '',
  
      arquivos: null
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
      setDados((prev) => ({
        ...prev,
          [name]: type === "checkbox" ? checked : value
    }));
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("LAUDO PERICIAL", 20, 20);

    doc.setFontSize(12);
    doc.text(`Número do Caso: ${dados.numeroCaso}`, 20, 30);
    doc.text(`Data da Perícia: ${dados.dataPericia}`, 20, 40);
    doc.text(`Hora da Perícia: ${dados.horaPericia}`, 20, 50);
    doc.text(`Local da Perícia: ${dados.localPericia}`, 20, 60);
    doc.text(`Autoridade Requisitante: ${dados.autoridadeRequisitante}`, 20, 70);
    doc.text(`Peritos Designados: ${dados.peritosDesignados}`, 20, 80);
    doc.text(`Pessoa Periciada: ${dados.pessoaPericiada}`, 20, 90);
    doc.text(`Tipo de Exame: ${dados.tipoExame}`, 20, 100);
    doc.text(`Finalidade: ${dados.finalidade}`, 20, 110);
    doc.text(`Quesitos: ${dados.quesitos}`, 20, 120);

    doc.text("Histórico:", 20, 135);
    doc.text(dados.historico, 20, 142);

    doc.text("Descrição:", 20, 155);
    doc.text(dados.descricao, 20, 162);

    doc.text("Discussão:", 20, 175);
    doc.text(dados.discussao, 20, 182);

    doc.text("Conclusão:", 20, 195);
    doc.text(dados.conclusao, 20, 202);

    doc.text("Resposta aos Quesitos:", 20, 215);
    doc.text(dados.respostaQuesitos, 20, 222);

    doc.text(`Identificação da Vítima: ${dados.identificacaoVitimado}`, 20, 235);
    doc.text(`Resultado da Identificação: ${dados.resultadoIdentificacao}`, 20, 260);
    doc.save("laudo_pericial.pdf");
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o Sidebar */}

    <div className="container">
      <h2>Gerar Laudo</h2>

      <div className="section-container">
        <div className="full">
          <label>Dados do Caso </label>
          <select
            name="numeroCaso"
            value={dados.numeroCaso}
            onChange={handleChange}
            className="input"
          >
            <option value="">Selecione um caso</option>
            <option value="Caso 001">Caso 001</option>
            <option value="Caso 002">Caso 002</option>
            <option value="Caso 003">Caso 003</option>
          </select>
      </div>
      
  <div className="full">
    <label>Nome do Caso :</label>
    <input type="text" name="nomeCaso" onChange={handleChange}></input>
  </div>


<div className="row">
  <div className="form-group">
    <label>Data da Perícia :</label>
    <input type="date" name="dataPericia" onChange={handleChange}></input>
  </div>

   <div className="form-group">
    <label>Hora da Perícia:</label>
    <input type="time" name="horaPericia" onChange={handleChange} />
    </div>

  <div className="full">
    <label>Local da Perícia :</label>
    <input type="text" name="localPericia" onChange={handleChange}></input>
  </div>
</div>

 <div className="full">
    <label>Autoridade Requisitante:</label>
    <input type="text" name="autoridadeRequisitante" onChange={handleChange}></input>
  </div>

  <div className="row">
  <div className="form-group">
    <label>Peritos Designados</label>
    <input type="text" name="peritosDesignados" onChange={handleChange}></input>
  </div>

  <div className="form-group">
    <label>Pessoa Periciada</label>
    <input type="text" name="pessoaPericiada" onChange={handleChange}></input>
  </div>
</div>

<div className="form-group">
    <label>Finalidade</label>
    <input type="text" name="finalidade" onChange={handleChange}></input>
  </div>
  <div className="form-group">
    <label>Tipo de Exame</label>
    <input type="text" name="tipoExame" onChange={handleChange}></input>
  </div>
  <div className="form-group">
    <label>Quesitos</label>
    <textarea name="quesitos" onChange={handleChange}></textarea>
  </div>
</div>


<div className="section-container">

    <h4>Corpo do Laudo</h4>

  <div className="full">
    <label>Histórico:</label>
    <textarea name="historico" onChange={handleChange}></textarea>
  </div>

  <div className="full">
    <label>Descrição:</label>
    <textarea name="descricao" onChange={handleChange}></textarea>
  </div>

  <div className="full">
    <label>Discurssão:</label>
    <textarea name="discussao" onChange={handleChange}></textarea>
  </div>

  <div className="full">
    <h4>Conclusão</h4>
    <textarea name="conclusao" onChange={handleChange}></textarea>
  </div>

  <div className="full">
    <h4>Resposta aos Quesitos</h4>
    <textarea name="respostaQuesitos" onChange={handleChange}></textarea>
  </div>
</div>


<div className="section-container">
    <h4>Métodos de Identificação</h4>

  <div className="form-group">
    <label>Diagnóstico Parcial</label>
    <textarea name="diagnostico" onChange={handleChange}></textarea>
  </div>
  

  <div className="full">
  <label> Forma de Identificação da vítima </label>
          <select
            name="identificacaoVitimado"
            value={dados.identificacaoVitimado}
            onChange={handleChange}
            className="input"
          >
            <option value="">Selecione o método</option>
            <option value="Papiloscopia">Papiloscopia</option>
            <option value="Odontologico">Odontológico</option>
            <option value="DNA">DNA</option>
            <option value="familia">Reconhecimento Familiar</option>
          </select>
    </div>
    <div className="full">
      <label>Resultado da Identificação</label>
      <textarea
        name="resultadoIdentificacao"
        value={dados.resultadoIdentificacao}
        onChange={handleChange}
        className="input"
      />
    </div>
</div>
        <button className="btn-pdf" onClick={gerarPDF}>Gerar PDF</button>
      </div>
    </div>
  );
}

export default GerarLaudo;
