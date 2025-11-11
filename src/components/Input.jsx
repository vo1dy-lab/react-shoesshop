import "../styles/Input.css";
import { GoSearch } from "react-icons/go";

const Input = ({ onChange, inputValue }) => {
  return (
    <div className="input-container">
      <GoSearch className="input-icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Enter your search shoes"
        onChange={onChange}
        value={inputValue}
      />
    </div>
  );
};

export default Input;
