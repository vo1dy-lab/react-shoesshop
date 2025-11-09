import "./Colors.css";
import RadioButton from "../../components/RadioButton";

const Colors = ({ onChange }) => {
  const colors = ["All", "Black", "Blue", "Red", "Green", "White"];
  const colorMap = {
    All: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    Black: "#000000",
    Blue: "#1e90ff",
    Red: "#ff0000",
    Green: "#32cd32",
    White: "#ffffff",
  };
  return (
    <div className="price-container">
      <h2>Colors</h2>
      {colors.map((color) => (
        <RadioButton
          key={`colors-${color.toLowerCase().trim()}`}
          name="colors"
          id={`colors-${color.toLowerCase().trim()}`}
          value={color}
          color={colorMap[color]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Colors;
