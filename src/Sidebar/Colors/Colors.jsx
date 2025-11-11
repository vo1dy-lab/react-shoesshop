import "./Colors.css";
import RadioButton from "../../components/RadioButton";

const Colors = ({ onChange }) => {
  const colors = ["all", "black", "blue", "red", "green", "white"];
  const colorMap = {
    all: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    black: "#000000",
    blue: "#1e90ff",
    red: "#ff0000",
    green: "#32cd32",
    white: "#ffffff",
  };
  return (
    <div className="price-container">
      <h2>Colors</h2>
      {colors.map((color) => (
        <RadioButton
          key={`colors-${color}`}
          name="colors"
          id={`colors-${color}`}
          value={color}
          color={colorMap[color]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Colors;
