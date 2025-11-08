import "./Recommended.css";
import Button from "../components/Button";
import { useState } from "react";

const Recommended = () => {
  const [currentBtn, setCurrentBtn] = useState("");
  const btnTitles = ["All Products", "Nike", "Adidas", "Puma", "Vans"];

  const handleClick = (title) => {
    setCurrentBtn(title);
  };
  return (
    <div className="recommended-container">
      <h2>Recommended</h2>
      <div className="recommended-btns">
        {btnTitles.map((title) => (
          <Button
            key={title}
            title={title}
            onClick={() => handleClick(title)}
            isCurrent={currentBtn === title}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
