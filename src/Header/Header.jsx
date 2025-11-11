import "./Header.css";
import Logo from "../components/Logo";
import Input from "../components/Input";
import HeaderNav from "../components/HeaderNav";

const Header = ({ onChange, inputValue }) => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Logo />
        <Input onChange={onChange} inputValue={inputValue} />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
