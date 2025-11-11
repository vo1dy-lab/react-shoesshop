import "./Price.css";
import RadioButton from "../../components/RadioButton";

const Price = ({ onChange }) => {
  const price = ["all", "$0 - 50", "$50 - $100", "$100 - $150", "over $150"];
  return (
    <div className="price-container">
      <h2>Price</h2>
      {price.map((pr) => (
        <RadioButton
          key={`price-${pr}`}
          name="price"
          id={`price-${pr}`}
          value={pr}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Price;
