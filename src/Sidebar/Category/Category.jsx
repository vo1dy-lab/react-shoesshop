import "./Category.css";
import RadioButton from "../../components/RadioButton";

const Category = ({ onChange }) => {
  const category = ["all", "sneakers", "flats", "sandals", "heels"];
  return (
    <div className="category-container">
      <h2>Category</h2>
      {category.map((cat) => (
        <RadioButton
          key={`category-${cat}`}
          name="category"
          id={`category-${cat}`}
          value={cat}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Category;
