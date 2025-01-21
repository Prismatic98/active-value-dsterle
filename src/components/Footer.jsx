import React from "react";
import { ReactComponent as Instagram } from "../assets/images/icons/instagram.svg";
import { ReactComponent as Facebook } from "../assets/images/icons/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <div className="row">
          <div className="footer__column col col-xl-2">
            <address className="footer__address">
              <span className="street">Benzenbergstraße 39 - 47</span>
              <span className="city">40219 Düsseldorf</span>
            </address>
          </div>
          <div className="footer__column col col-xl-2">
            <div className="footer__contact">
              <p className="phone">
                Telefon:&nbsp;
                <a href="tel:+492117495050">+49 211 / 749 505 0</a>
              </p>
              <p className="email">
                E-Mail:&nbsp;
                <a href="mailto:info@active-value.de" className="email">
                  info@active-value.de
                </a>
              </p>
            </div>
          </div>
          <div className="footer__column col col-xl-4">
            <div className="footer__social">
              <a
                href="https://www.instagram.com/activevalue/?hl=de"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/activevalue/"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
              >
                <Facebook />
              </a>
            </div>
          </div>
          <div className="footer__column col col-xl-4">
            <div className="footer__links">
              <a href="/impressum" className="footer__link">
                Impressum
              </a>
              <a href="/datenschutz" className="footer__link">
                Datenschutz
              </a>
              <a href="/agb" className="footer__link">
                AGB
              </a>
            </div>
            <p className="footer__copy">
              <span>
                Copyright &copy; {new Date().getFullYear()} active value GmbH -{" "}
              </span>
              <span>Alle Rechte vorbehalten.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
