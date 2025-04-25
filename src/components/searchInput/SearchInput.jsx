import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ou qualquer outra biblioteca de ícones

const SearchInput = ({
  type = 'text', // Tipo padrão
  name,
  onChange,
  value,
  placeholder,
  label,
  accept,
  capture,
  multiple,
  showToggleIcon = false, // Prop para controlar se mostra o ícone
  customToggleIcon // Prop para ícone personalizado
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleType = () => {
    setInputType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  // Ícone padrão (pode ser substituído pelo customToggleIcon)
  const DefaultToggleIcon = inputType === 'password' ?
    <FaEye className="toggle-icon" /> :
    <FaEyeSlash className="toggle-icon" />;

  return (
    <div className="search-input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input-wrapper">
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          accept={accept}
          capture={capture}
          multiple={multiple}
        />

        {/* {showToggleIcon && (
          <button
            type="button"
            onClick={toggleType}
            className="toggle"
            aria-label={inputType === 'password' ? 'Mostrar senha' : 'Ocultar senha'}
          >
            {customToggleIcon || DefaultToggleIcon}
          </button>
        )} */}
      </div>
    </div>
  );
};

export default SearchInput;