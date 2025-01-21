import React from "react";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Navigation = ({ isNavOpen, setIsNavOpen }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setIsNavOpen(false);
    setShowModal(true);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list container">
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Startseite
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#">
            Über uns
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#Referenzen">
            Referenzen
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="Kontakt" onClick={handleShow}>
            Kontakt
          </a>
        </li>
      </ul>
      <ContactForm show={showModal} setShow={setShowModal}/>
    </nav>
  );
};

export default Navigation;
