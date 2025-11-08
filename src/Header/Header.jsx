import "./Header.css";
import { LuHeart } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import Logo from "../components/Logo";
import Input from "../components/Input";
import IconButton from "../components/IconButton";

const Header = () => {
  const icons = [
    <LuHeart key={"heart"} />,
    <LuShoppingCart key={"cart"} />,
    <LuUser key={"user"} />,
  ];
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Logo />
        <Input />
        <div className="nav-btns">
          {icons.map((icon) => (
            <IconButton icon={icon} key={icon.key} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
