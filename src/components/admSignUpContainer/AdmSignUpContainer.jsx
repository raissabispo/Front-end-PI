import React from "react";

function AdmSignUpContainer({
  handleButtonClick,
  nome,
  email,
  cargo,
  acesso,
  setNome,
  setEmail,
  setCargo,
  setAcesso,
}) {
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Acesso"
        value={acesso}
        onChange={(e) => setAcesso(e.target.value)}
      />

      <button type="submit" onClick={handleButtonClick}>Cadastrar</button>
    </div>
  );
}

export default AdmSignUpContainer;