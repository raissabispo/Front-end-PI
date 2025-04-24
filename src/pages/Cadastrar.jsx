import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "../styles/global.css"
import { useEffect } from "react";
import apiRoutes from "../api/routes"; // Importando as rotas da API


function RegisterPerito() {

  const [toast, setToast] = useState({ show: false, Message: "", type: "" });
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");
  const [acesso, setAcesso] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const novoPerito = {
        nome,
        email,
        senha,
        role,
        acesso, // se estiver a usar acesso também
      };

      await apiRoutes.postUser(novoPerito); // chamada à API
      console.log("Perito cadastrado");

      showToast("Perito cadastrado com sucesso!", "success");

      // Limpa os campos
      setNome("");
      setEmail("");
      setSenha("");
      setRole("");
      setAcesso("");

      // Opcional: redirecionar ou fazer outra ação
      // navigate("/alguma-rota");

    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      showToast("Erro ao cadastrar perito", "error");
    }
  };



  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({
      show: true, message, type
    });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     //func para cadastra o perito({nome, email, role})

  //     console.log("Perito cadastrado");

  //     setNome("");
  //     setEmail("");
  //     setRole("");
  //     setAcesso("");
  //     showToast("Perito Cadastrado");
  //   } catch (err) {
  //     console.error("Erro ao cadastrar");
  //     showToast("Erro ao cadastrar");
  //   }
  // };



  const handleButtonClick = () => {
    navigate("");
  };

  return (
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
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="nome.sobrenome@123"
            required

          />
        </div>

        <div className="row">
          <div className="form-group">
            <label>role:</label>
            <select value={role}
              onChange={(e) =>
                setRole(e.target.value)} required
              className="input">

              <option value="">Selecione</option>
              <option value="perito">Perito</option>
              <option value="assistente">Assistente</option>
            </select>
          </div>
        </div>

        <button className="btn" onClick={handleSubmit} type="submit">Cadastrar</button>

      </div>
    </div>
  );
}

export default RegisterPerito;