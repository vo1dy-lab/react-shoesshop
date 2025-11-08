import "../styles/Button.css";

const Button = ({ title, onClick, isCurrent }) => {
  return (
    <button
      type="button"
      className={`button ${isCurrent && "button-current"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
