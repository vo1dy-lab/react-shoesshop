import "./Recommended.css";
import Button from "../components/Button";

const Recommended = ({ onClick, currentCompany }) => {
  const companies = ["All Products", "Nike", "Adidas", "Puma", "Vans"];

  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="recommended-btns">
        {companies.map((company) => (
          <Button
            key={company}
            title={company}
            value={company}
            onClick={onClick}
            isCurrent={currentCompany === company}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
