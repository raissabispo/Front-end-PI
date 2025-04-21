import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import icon from "../assets/icon.png";

function Login() {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if(tipoUsuario.toLocaleLowerCase() === "admin" || tipoUsuario.toLocaleLowerCase() ==="assistente" || tipoUsuario.toLocaleLowerCase() ==="perito"){
      localStorage.setItem("tipoUsuario", tipoUsuario.toLocaleLowerCase());
      navigate("/dashboard")
    } else{
      alert("Tipo de usuário inválido! Use 'perito', 'admin' ou 'assistente'.")
    }

    //Rotas para acesso de cada cargo
  };

  return (
    <div className="login-container">
      {/* Ícone ao lado do formulário */}
      <div className="icon">
        <img src={icon} alt="icon-app" />
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Usuário:
        <input
          type="text"
          value={tipoUsuario}
          onChange={(e) => setTipoUsuario(e.target.value)}
          placeholder="Digite seu usuário"
          required>
        </input>
        </label>

        <label>
          Senha:
          <input className="mostrarSenha"
            type={mostrarSenha ? "text" : "password"} 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </label>

    {/* Opções de senha */}
    <div className="senha-opcoes">
  <label className="mostrar-senha">
    <input
      type="checkbox"
      checked={mostrarSenha}
      onChange={() => setMostrarSenha(!mostrarSenha)}
    />
    Mostrar senha
  </label>

  <p className="esqueceu">
    <a href="/recuperar-senha">Esqueceu a senha?</a>
  </p>
</div>


        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
