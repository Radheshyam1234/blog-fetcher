import LogoImage from "../../assets/logo-image.png";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={LogoImage} alt="logo" />
    </div>
  );
};
