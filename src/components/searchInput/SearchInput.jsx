
const SearchInput = ({type, name, onChange, value, placeholder, label,accept,capture,multiple}) => {
  return (
    <div>
    <label htmlFor={name}>{label}</label>
    <input
    type={type}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    accept={accept}
    capture={capture}
    id={name}
    multiple={multiple}
    />
    </div>
  )
}


export default SearchInput;
