import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} TJ’s Photo Phactory. All rights reserved.</p>
      <p className="socials">
        <a href="#">Instagram</a> | <a href="#">Facebook</a> | <a href="#">Twitter</a>
      </p>
    </footer>
  );
}

export default Footer;
