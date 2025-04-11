import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar"; 
import "../styles/GerarNovoCaso.css"
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import SearchInput from "../components/searchInput/SearchInput";

function GerarNovoCaso() {
  const [responsavel, setResponsavel] = useState("");
  const [nomedocaso, setnomedoCaso] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [descricao, setdescricao] = useState("");
  const [upload, setupload] = useState("");
  const [informacoes, setInformacoes] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault(); //evita o carregamento da página
  };
  
  return (
    <div className="dashboard-container">
      <Sidebar/>

      <div className="gerar-caso">
        <h2>Adicionar Novo Caso </h2>

       <form onSubmit={handleSubmit}>
        <SearchInput type="text" name="numeroCaso" label="Numéro do caso" />
        <SearchInput type="text" label="Responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
        <SearchInput type="text" label="Nome do Caso" value={nomedocaso} onChange={(e) => setnomedoCaso(e.target.value)} />
        <SearchInput type="date" label="Data" value={data} onChange={(e) => setData(e.target.value)}/>
        <SearchInput type="time" label="Hora" value={hora} onChange={(e) => setHora(e.target.value)} />
        <SearchInput type="text" label="Local" value={local} onChange={(e) => setLocal(e.target.value)} />
        <SearchInput type="text" label="Descrição" value={descricao} onChange={(e) => setdescricao(e.target.value)} />
        <SearchInput type="file" label="Evidências" value={upload} accept="image/*, .pdf, .doc, .docx" onChange={(e) => setupload(e.target.files[0])} capture="environment"  />
        <SearchInput type="text" label="Informações" value={informacoes} onChange={(e) => setInformacoes(e.target.value)} />       
         <ButtonSubmit text="Adicionar Novo Caso"/>
         </form>
      </div>
    </div>
  );

}

export default GerarNovoCaso;
 