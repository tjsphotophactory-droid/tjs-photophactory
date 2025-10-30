import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">TJ’s Photo Phactory</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
