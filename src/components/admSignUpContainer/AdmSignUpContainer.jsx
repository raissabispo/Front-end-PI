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
  const users =[
    { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
    { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
    { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'},
    { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
    { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
    { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'}
];
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
      <tbody>
                    {users.map((user) => (
                        <tr key = {user.nome}>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>{user.cargo}</td>

                            <td>
                                <button className="excluir">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
      <button type="submit" onClick={handleButtonClick}>Cadastrar</button>
    </div>
  );
}

export default AdmSignUpContainer;