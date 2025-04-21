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
        <div className = "card-user">
            <h2>Lista de Usuários</h2>
            <button className="btn-novo" onClick={handleClick}>
            <i class="fa-solid fa-user-plus"></i>Adicionar novo usuário
            </button>

            <div className="card-info">
                {users.map((user,index) => (
                    <div key={index} className="user-card">
                        <h3>{user.nome}</h3>
                        <p><i class="fa-solid fa-user"></i> {user.email}</p>
                        <p><i class="fa-solid fa-briefcase"></i> {user.cargo}</p>
                        <button class="excluir">
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        <Link to={`/dashboard`} className="ver-casos">Ver casos</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminTable;