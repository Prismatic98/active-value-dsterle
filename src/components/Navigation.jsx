import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list container">
        <li className="navigation__item">
          <Link className="navigation__link" to="/active-value-dsterle">
            Startseite
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/ueber-uns">
            Über uns
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/referenzen">
            Referenzen
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
