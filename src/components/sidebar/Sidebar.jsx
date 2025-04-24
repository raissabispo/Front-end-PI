import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import icon from "../../assets/icon.png";

function Sidebar() {
  const tipoUsuario = localStorage.getItem("tipoUsuario")?.toLowerCase();
  return (
    <div className="sidebar">
      <div className="icon">
        <img src={icon} alt="icon-app" />
      </div>
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fa-solid fa-house"></i>
            <span>Painel</span>
          </Link>
        </li>
        <li>
          <Link to="/banco-odontologico">
            <i className="fa-solid fa-folder-open"></i>
            <span>Banco Odontológico</span>
          </Link>
        </li>
        <li>
          <Link to="/gerar-novo-caso">
            <i className="fa-solid fa-plus"></i>
            <span>Adicionar Novo Caso</span>
          </Link>
        </li>
        <li>
          <Link to="/gerar-laudo/:id">
            <i className="fa-solid fa-file-invoice"></i>
            <span>Gerar Laudo</span>
          </Link>
        </li>

        {tipoUsuario === "admin" && (
          <>
            <li>
              <Link to="/cadastrar">
                <i className="fa-regular fa-address-card"></i>
                <span>Cadastrar</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link to="/">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Sair</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;