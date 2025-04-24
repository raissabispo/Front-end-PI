import React, { use, useState } from "react";
import "./Table.css"
import { Link, Navigate, useNavigate } from "react-router-dom";
import ConfirmModal from '../cardModal/Modal';
import apiRoutes from "../../api/routes";
import { useEffect } from "react";


const AdminTable = () =>{
    // const users =[
    //     { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
    //     { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
    //     { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'},
    //     { nome: 'Heytor Pimentel', email: 'heytorpi234@gmail.com', cargo: 'Assistente'},
    //     { nome: 'Victor Santos', email: 'victorsa234@gmail.com', cargo: 'Perito'},
    //     { nome: 'Caio Lira', email: 'caioli234@gmail.com', cargo: 'Perito'}
    // ];

    const [users, setUsers] = useState([]); // Estado para armazenar os usuários
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const [error, setError] = useState(null); // Estado de erro
    

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await apiRoutes.getAllUsers(); // Chama a API para obter todos os usuários
            setUsers(response); // Atualiza o estado com os usuários obtidos
          } catch (error) {
            console.error("Erro ao buscar usuários:", error);
          }
        };
        fetchUsers(); // Chama a função para buscar os usuários
      }, []); // O array vazio significa que isso só será executado uma vez, como componentDidMount

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
                        <p><i class="fa-solid fa-briefcase"></i> {user.role}</p>
                        <Link to={`/dashboard`} className="ver-casos">casos</Link>
                        <div className="trash">
                        <button onClick={() => openDeleteModal(user.nome)}class="excluir">
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        </div>
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