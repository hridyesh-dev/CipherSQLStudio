import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src={logo} alt="Logo" className="navbar__logo" />
        <span className="navbar__brand">CipherSQLStudio</span>
      </div>
    </nav>
  );
};

export default Navbar;