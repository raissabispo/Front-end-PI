import React, { useState, useEffect } from "react";
import "./Table.css";
import { Link, useNavigate } from "react-router-dom";
import ConfirmModal from '../cardModal/Modal';
import apiRoutes from "../../api/routes";

const AdminTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToDeleteId, setUserToDeleteId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await apiRoutes.getAllUsers();
                setUsers(response);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                setError("Erro ao carregar usuários");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const openDeleteModal = (userId) => {
        setUserToDeleteId(userId);
        setIsModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsModalOpen(false);
        setUserToDeleteId(null);
    };

    const confirmDeleteUser = async () => {
        try {
            await apiRoutes.deleteUser(userToDeleteId);
            setUsers(prevUsers => prevUsers.filter(user => user._id !== userToDeleteId));
            closeDeleteModal();
        } catch (error) {
            console.error("Erro ao deletar usuário:", error);
            setError("Erro ao excluir usuário");
        }
    };

    const handleClick = () => {
        navigate('/cadastrar');
    };

    if (loading) return <div>Carregando usuários...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="card-user">
            <h2>Lista de Usuários</h2>
            <button className="btn-novo" onClick={handleClick}>
                <i className="fa-solid fa-user-plus"></i>Novo usuário
            </button>
            <div className="card-info">
                {users.map((user) => (
                    <div key={user._id} className="user-card">
                        <h3>{user.nome}</h3>
                        <p><i className="fa-solid fa-user"></i> {user.email}</p>
                        <p><i className="fa-solid fa-briefcase"></i> {user.role}</p>
                        <Link to={`/dashboard`} className="ver-casos">casos</Link>
                        <div className="trash">
                            <button onClick={() => openDeleteModal(user._id)} className="excluir">
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <ConfirmModal
                isOpen={isModalOpen}
                onClose={closeDeleteModal}
                onConfirm={confirmDeleteUser}
                message={`Tem certeza que deseja excluir este usuário?`}
            />
        </div>
    );
};

export default AdminTable;