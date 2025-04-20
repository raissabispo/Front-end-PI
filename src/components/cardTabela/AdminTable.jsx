import React from "react";
import "../cardTabela/Table.css"
import { Link, Navigate, useNavigate } from "react-router-dom";


const AdminTable = () =>{
    const users =[
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'},
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'}
    ];

    const Navigate = useNavigate();

    
    const handleClick = () => {
        Navigate('/cadastrar');
      };
    return(
        <div className="container">
            <h2>Lista de Usuários</h2>
            <button className="btn-novo" onClick={handleClick}> <i class="fa-solid fa-user-plus"></i>Adicionar novo usuário </button>
            <table className="admin-table">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Cargo</th>
                    <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key = {user.nome}>
                            <td data-label="nome">{user.nome}</td>
                            <td data-label="email">{user.email}</td>
                            <td data-label="cargo">{user.cargo}</td>

                            <td>
                                <button className="excluir">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;