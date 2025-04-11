const ButtonOnClick = ({text, onClick, className="" }) => (
  <button onClick={onClick} className={className}>{text}</button>
);

export default ButtonOnClick;
