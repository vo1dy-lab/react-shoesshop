import "../styles/Button.css";

const Button = ({ title, value, onClick, isCurrent }) => {
  return (
    <button
      type="button"
      className={`button ${isCurrent ? "button-current" : ""}`}
      onClick={() => onClick(value)}
    >
      {title}
    </button>
  );
};

export default Button;
