import { LuHeart } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import IconButton from "../components/IconButton";
import "../styles/HeaderNav.css";

const HeaderNav = () => {
  const icons = [
    <LuHeart key={"heart"} />,
    <LuShoppingCart key={"cart"} />,
    <LuUser key={"user"} />,
  ];
  return (
    <div className="nav-btns">
      {icons.map((icon) => (
        <IconButton icon={icon} key={icon.key} />
      ))}
    </div>
  );
};

export default HeaderNav;
