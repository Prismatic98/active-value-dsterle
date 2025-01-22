import React from "react";
import { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header ${isNavOpen ? "nav--opened" : ""}`}>
      <div className="header__content container">
        <div className={"header__logo"}>
          <Link to="/active-value-dsterle">
            <Logo />
          </Link>
        </div>
        <div className={"header__nav-trigger"} onClick={handleNavToggle}>
          <span>Menü</span>
          <div className={"header__nav-line"}></div>
          <div className={"header__nav-line"}></div>
        </div>
        <div className={`header__nav ${isNavOpen ? "header__nav--open" : ""}`}>
          <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
