import React from "react";
import { Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DetalhamentoCaso from "./pages/DetalhamentoCaso";
import GerarNovoCaso from "./pages/GerarNovoCaso";
import GerarLaudo from "./pages/GerarLaudo";
import BancoOdontologico from "./pages/BancoOdontologico";
import Admin from "./pages/Admin";
import Cadastrar from "./pages/Cadastrar";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
    <div className="app-container">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/detalhamento/:id" element={<DetalhamentoCaso />} />
          <Route path="/gerar-novo-caso/:id" element={<GerarNovoCaso />} />
          <Route path="/gerar-laudo/" element={<GerarLaudo />} />
          <Route path="/banco-odontologico" element={<BancoOdontologico />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </div>
    </div>
    </AuthProvider>
  );
}

export default App;
