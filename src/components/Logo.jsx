import { LuShoppingCart } from "react-icons/lu";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <LuShoppingCart className="logo" />
      <h2>ShoeShop</h2>
    </div>
  );
};

export default Logo;
