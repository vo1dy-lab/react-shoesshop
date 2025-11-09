import "./Category.css";
import RadioButton from "../../components/RadioButton";

const Category = ({ onChange }) => {
  const category = ["All", "Sneakers", "Flats", "Sandals", "Heels"];
  return (
    <div className="category-container">
      <h2>Category</h2>
      {category.map((cat) => (
        <RadioButton
          key={`category-${cat.toLowerCase().trim()}`}
          name="category"
          id={`category-${cat.toLowerCase().trim()}`}
          value={cat}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Category;
