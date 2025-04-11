import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import icon from "../assets/icon.png";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import SearchInput from "../components/searchInput/SearchInput";

function Login() {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tipoUsuario || !senha) {
      alert("Selecione um tipo");
      return;
    }

    localStorage.setItem("tipoUsuario", tipoUsuario);

    //Rotas para acesso de cada cargo

    if(tipoUsuario === "admin"){
      navigate("/admin");
    } else if (tipoUsuario === "perito"){
      navigate("/dashboard")
    }
  };

  return (
    <div className="login-container">
      {/* Ícone ao lado do formulário */}
      <div className="icon">
        <img src={icon} alt="icon-app" />
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <SearchInput label="Usuário" type="text" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} placeholder="Digite seu usuário" required />
        <SearchInput label="Senha" className="mostrarSenha" type={mostrarSenha ? "text" : "password"}  value={senha} onChange={(e) => setSenha(e.target.value)} required/>

    {/* Opções de senha */}
    <div className="senha-opcoes">
  <label className="mostrar-senha">
    <SearchInput type="checkbox" checked={mostrarSenha} onChange={() => setMostrarSenha(!mostrarSenha)} />
    Mostrar senha
  </label>

  <p className="esqueceu">
    <a href="/recuperar-senha">Esqueceu a senha?</a>
  </p>
</div>


        <ButtonSubmit text="Entrar" />
      </form>
    </div>
  );
}

export default Login;
