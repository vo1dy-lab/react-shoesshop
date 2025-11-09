import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ onChange }) => {
  return (
    <div className="sidebar-container">
      <Category onChange={onChange} />
      <Price onChange={onChange} />
      <Colors onChange={onChange} />
    </div>
  );
};

export default Sidebar;
