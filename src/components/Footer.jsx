import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Dein Projektname. Alle Rechte
        vorbehalten.
      </p>
    </footer>
  );
};

export default Footer;
