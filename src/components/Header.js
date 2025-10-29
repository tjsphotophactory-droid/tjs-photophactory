import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#111",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>TJ’s PhotoPhactory</h2>

      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
        <Link to="/pricing" style={linkStyle}>Pricing</Link>
        <Link to="/booking" style={linkStyle}>Booking</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  marginLeft: "1rem",
  textDecoration: "none",
  fontWeight: "500",
};
