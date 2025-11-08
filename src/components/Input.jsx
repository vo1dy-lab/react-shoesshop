import "../styles/Input.css";
import { GoSearch } from "react-icons/go";

const Input = () => {
  return (
    <div className="input-container">
      <GoSearch className="input-icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter your search shoes"
      />
    </div>
  );
};

export default Input;
