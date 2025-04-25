import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import icon from "../assets/icon.png";
import ButtonSubmit from "../components/buttons/ButtonSubmit";
import SearchInput from "../components/searchInput/SearchInput";
import apiRoutes from "../api/routes";

function Login() {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const credentials = {
        email: email,
        senha: senha,
      };

      console.log("Enviando credenciais:", credentials);

      const response = await apiRoutes.login(credentials);
      console.log("Resposta do login:", response);

      if (response.token) {
        localStorage.setItem("authToken", response.token);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            id: response.user._id,
            email: response.user.email,
            role: response.user.role,
          })
        );
        // Navigate to dashboard with user ID in the URL
        navigate(`/dashboard/${response.user._id}`);
      } else {
        throw new Error("Token não recebido na resposta");
      }
    } catch (err) {
      console.error("Login failed:", err);
      const errorMessage =
        err.response?.data?.message ||
        "Email ou senha incorretos. Por favor, tente novamente.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="icon">
        <img src={icon} alt="icon-app" />
      </div>

      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}

        <SearchInput
          label="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          required
        />

        <SearchInput
          label="Senha"
          className="mostrarSenha"
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          showToggleIcon={true}
          required
        />

        <div className="senha-opcoes">
          <label className="mostrar-senha">
            <SearchInput
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

        <ButtonSubmit
          text={loading ? "Carregando..." : "Entrar"}
          disabled={loading}
          className={"btn"}
        />
      </form>
    </div>
  );
}

export default Login;