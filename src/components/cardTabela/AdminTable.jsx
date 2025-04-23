import React, { useState } from "react";
import "./Table.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import ConfirmModal from '../cardModal/Modal';



const AdminTable = () =>{
    const users =[
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'},
        { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
        { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
        { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'}
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
      const [userToDelete, setUserToDelete] = useState(null);
    const Navigate = useNavigate();

    const openDeleteModal = (user) => {
        setUserToDelete(user);
        setIsModalOpen(true);
      };
      // Modal de cancelar e fechar o modal
      const closeDeleteModal = () => {
        setIsModalOpen(false);
        setUserToDelete(null);
      };
    
      // Confirmar deletação
      const confirmDeleteUser= () => {
        // Lógica para excluir o caso com o ID 'caseToDeleteId'
      }
    
    
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
                        <button onClick={() => openDeleteModal(user.nome)}class="excluir">
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        <Link to={`/dashboard`} className="ver-casos">Ver casos</Link>
                    </div>
                ))}
            </div>
             <ConfirmModal
                    isOpen={isModalOpen}
                    onClose={closeDeleteModal}
                    onConfirm={confirmDeleteUser}
                    message={`Tem certeza que deseja excluir usuário ${userToDelete}?`}></ConfirmModal>
        </div>
    );
};

export default AdminTable;