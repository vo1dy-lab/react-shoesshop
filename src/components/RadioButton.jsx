import "../styles/RadioButton.css";

const RadioButton = ({ name, id, value, onChange, color }) => {
  const swatchStyle = {};
  if (color) {
    if (color.includes("gradient")) {
      swatchStyle.background = color;
    } else {
      swatchStyle.backgroundColor = color;
    }
  }

  return (
    <div className="radio-btn">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {color && <span className="color-swatch" style={swatchStyle}></span>}
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
