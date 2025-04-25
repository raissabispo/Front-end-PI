import React, { useState, useEffect } from 'react';
import './Modal.css'; // Seu arquivo CSS com as animações

const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 200); // Tempo deve corresponder à duração da animação de saída
  };

  const handleConfirm = () => {
    setIsClosing(true);
    setTimeout(() => {
      onConfirm();
      onClose();
    }, 200);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`}>
        <p>{message}</p>
        <div className="modal-buttons">
          <button 
            className="cancel-button" 
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button 
            className="confirm-button" 
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;    