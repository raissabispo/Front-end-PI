import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import jsPDF from "jspdf";
import "./../styles/global.css";
import SearchInput from "../components/searchInput/SearchInput";
import ButtonOnClick from "../components/buttons/ButtonOnClick";

const GerarLaudo = () => {
  const [dados, setDados] = useState({
    nomeCaso: "",
    data: "",
    hora: "",
    perito: "",
    nomePaciente: "",
    nascimento: "",
    sexo: "",
    documento: "",
    filiacao: "",
    localExame: "",
    motivo: "",
    metodos: [],
    achados: "",
    diagnostico: "",
    grauCerteza: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setDados((prev) => ({
        ...prev,
        metodos: checked
          ? [...prev.metodos, value]
          : prev.metodos.filter((m) => m !== value),
      }));
    } else {
      setDados((prev) => ({ ...prev, [name]: value }));
    }
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("LAUDO ODONTOLÓGICO PERICIAL", 20, 20);

    doc.setFontSize(12);
    doc.text(`Nome do Caso: ${dados.nomeCaso}`, 20, 30);
    doc.text(`Data: ${dados.data}`, 20, 40);
    doc.text(`Hora:${dados.hora}`, 20, 50);
    doc.text(`Perito Responsável: ${dados.perito}`, 20, 70);

    doc.text("IDENTIFICAÇÃO DO EXAMINADO", 20, 80);
    doc.text(`Nome: ${dados.nomePaciente}`, 20, 90);
    doc.text(`Nascimento: ${dados.nascimento}`, 20, 100);
    doc.text(`Sexo: ${dados.sexo}`, 20, 110);
    doc.text(`Documento: ${dados.documento}`, 20, 120);
    doc.text(`Filtração: ${dados.filiacao}`, 20, 130);

    doc.text("INFORMAÇÃO DO EXAME", 20, 150);
    doc.text(`Local: ${dados.localExame}`, 20, 160);
    doc.text(`Motivo da Perícia: ${dados.motivo}`, 20, 170);
    doc.text(`Métodos Utilizados: ${dados.metodos.join(",")}`, 20, 180);

    doc.text("ACHADOS PERICIAIS", 20, 230);
    doc.text(`DESCRIÇÃO:${dados.achados}`, 20, 240);

    doc.text("CONCLUÇÃO", 20, 250);
    doc.text(`Diagnóstico: ${dados.diagnostico}`, 20, 260);
    doc.text(`Grau de certeza: ${dados.grauCerteza}`, 20, 267);

    doc.text("_______________________", 20, 280);
    doc.text(`${dados.perito}`, 20, 290);
    doc.text("Perito Responsável", 20, 300);

    doc.save("laudo_odontologico.pdf");
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o Sidebar */}
      <div className="gerar-laudo-container">
        <h2>Gerar Laudo</h2>

        <label>Caso</label>
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

        <label>Número do Caso :</label>
        <SearchInput type="text" name="numeroCaso" onChange={handleChange} />

        <label>Data :</label>
        <SearchInput type="data" name="data" onChange={handleChange} />

        <label>Hora:</label>
        <SearchInput type="time" name="time" onChange={handleChange} />

        <label>Perito Responsável :</label>
        <SearchInput type="text" name="perito" onChange={handleChange} />

        <h3>Identificação do Examinado</h3>
        <label>Nome do Paciente :</label>
        <SearchInput type="text" name="numeroPaciente" onChange={handleChange}
        />

        <label>Data de Nascimento</label>
        <SearchInput type="date" name="nascimento" onChange={handleChange} />

        <label>Sexo:</label>
        <select name="sexo" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <label>Documento:</label>
        <SearchInput type="text" name="documento" onChange={handleChange} />

        <label>Filiação:</label>
        <SearchInput type="text" name="filiacao" onChange={handleChange} />

        <h3>Informações do Exame</h3>
        <label>Local:</label>
        <SearchInput type="text" name="localExame" onChange={handleChange} />

        <label>Motivos da Perícia:</label>
        <SearchInput type="text" name="motivo" onChange={handleChange} />

        <h4> Métodos Utilizados:</h4>
        <label>
          <SearchInput type="checkbox" name="metodos" value="Radiografia" onChange={handleChange} /> 
          Radiografia
        </label>
        <label>
        <SearchInput type="checkbox" name="metodos" value="Fotografia" onChange={handleChange} /> 
          Fotografia
        </label>
        <h3>Achados Periciais</h3>
        <textarea name="achados" onChange={handleChange}></textarea>

        <h3>Conclução</h3>
        <label>Diagnóstico Parcial</label>
        <textarea name="diagnostico" onChange={handleChange}></textarea>

        <label>Grau de Certeza</label>
        <select name="grauCerteza" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="Conclusivo">Conclusivo</option>
          <option value="Necessita de exames">Necessita de exames</option>
        </select>
        <ButtonOnClick text="Gerar PDF" onClick={gerarPDF} />
      </div>
    </div>
  );
};

export default GerarLaudo;
