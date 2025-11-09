import "./Price.css";
import RadioButton from "../../components/RadioButton";

const Price = ({ onChange }) => {
  const price = ["All", "$0 - 50", "$50 - $100", "$100 - $150", "Over $150"];
  return (
    <div className="price-container">
      <h2>Price</h2>
      {price.map((pr) => (
        <RadioButton
          key={`price-${pr.toLowerCase().trim()}`}
          name="price"
          id={`price-${pr.toLowerCase().trim()}`}
          value={pr}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Price;
