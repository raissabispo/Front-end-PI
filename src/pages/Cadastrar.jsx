import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/cardSidebar/Sidebar"; 
import "../styles/global.css"


function RegisterPerito(){
  const [toast, setToast] = useState({show:false, Message:"", type:""});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [acesso, setAcesso] = useState("");

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({
      show: true, message, type});
      setTimeout(() => setToast({show: false, message:"", type:""}), 3000);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      //func para cadastra o perito({nome, email, cargo})

      console.log("Perito cadastrado");

      setNome("");
      setEmail("");
      setCargo("");
      setAcesso("");
      showToast("Perito Cadastrado");
    } catch(err){console.error("Erro ao cadastrar");
      showToast("Erro ao cadastrar");
    }
  };

  const handleButtonClick = () => {
    navigate("");
  };

  return(
    <div className="container">
          <Sidebar /> {/* Adicionando o sidebar */}
      
       <h2>Cadastrar Novo Usuário </h2>
      {toast.show && <div className={`toast ${toast.type}`}>
        {toast.message}</div>}   

      <div className="section-container">
        <div className="form-group">
          <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome completo"
              />
          </div> 
          <div className="form-group">
          <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              required
              
              />
          </div> 

          <div className="row">
            <div className="form-group">
          <label>Cargo:</label>
            <select value={cargo}
               onChange={(e) => 
              setCargo(e.target.value)} required
              className="input">

                <option value="">Selecione</option>
                <option value="Perito">Perito</option>
                <option value="Assistente">Assistente</option>
            </select>
          </div>
              <div className="form-group">
            <label>Tipo de acesso:</label>
            <select value={acesso}
               onChange={(e) => 
              setAcesso(e.target.value)} required
              className="input">

                <option value="">Selecione</option>
                <option value="Perito">Perito</option>
                <option value="Assistente">Assistente</option>
            </select>
          </div> 
        </div>

          <button className="btn" type="submit">Cadastrar</button>
     
    </div>
  </div>
  );
}

export default RegisterPerito;