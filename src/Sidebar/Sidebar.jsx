import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleCategory, handlePrice, handleColors }) => {
  return (
    <div className="sidebar-container">
      <Category onChange={handleCategory} />
      <Price onChange={handlePrice} />
      <Colors onChange={handleColors} />
    </div>
  );
};

export default Sidebar;
