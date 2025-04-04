import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTW Logo" />
        </Link>

        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      <ToggleSwitch />
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + ADD CLOTHES
      </button>
      <div className="header__user-container">
        <Link to="/profile" className="header__link">
          <p className="header__username">Terrance Tengegne</p>
          <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
