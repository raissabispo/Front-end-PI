import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "./Cadastro.css";
import AdmSignUpContainer from "../components/admSignUpContainer/AdmSignUpContainer";

function RegisterPerito() {
  const [toast, setToast] = useState({ show: false, Message: "", type: "" });
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [acesso, setAcesso] = useState("");

  const navigate = useNavigate();

  const showToast = (message, type) => {
    setToast({
      show: true,
      message,
      type,
    });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const validateForm = () => {
    if (!nome || !email || !cargo) {
      showToast("Por favor, preencha todos os campos", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      //func para cadastra o perito({nome, email, cargo})

      console.log("Perito cadastrado");

      setNome("");
      setEmail("");
      setCargo("");
      setAcesso("");
      showToast("Perito Cadastrado");
    } catch (err) {
      console.error("Erro ao cadastrar:", err.message);
      showToast("Erro ao cadastrar");
    }
  };

  const handleButtonClick = () => {
    navigate("");
  };

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Adicionando o sidebar */}
      <h2>Cadastrar Novo Perito </h2>
      {toast.show && (
        <div className={`toast ${toast.type}`}>{toast.message}</div>
      )}
      <form onSubmit={handleSubmit} className="login-form">
        <AdmSignUpContainer
          handleButtonClick={handleButtonClick}
          nome={nome}
          email={email}
          cargo={cargo}
          acesso={acesso}
        />
      </form>
    </div>
  );
}

export default RegisterPerito;
