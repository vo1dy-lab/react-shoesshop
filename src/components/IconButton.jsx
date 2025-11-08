import "../styles/IconButton.css";

const IconButton = ({ icon }) => {
  return (
    <button type="button" className="icon-btn">
      {icon}
    </button>
  );
};

export default IconButton;
