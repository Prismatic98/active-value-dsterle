import React from "react";
import { useState } from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import Navigation from "./Navigation";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`header container ${isNavOpen ? "nav--opened" : ""}`}>
      <div className={"header__logo"}>
        <Logo />
      </div>
      <div className={"header__nav-trigger"} onClick={handleNavToggle}>
        <span>Menü</span>
        <div className={"header__nav-line"}></div>
        <div className={"header__nav-line"}></div>
      </div>
      {isNavOpen && <Navigation></Navigation>}
    </header>
  );
};

export default Header;
