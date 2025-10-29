import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <p>&copy; {new Date().getFullYear()} TJ’s PhotoPhactory. All rights reserved.</p>
      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        Crafted with ❤️ using React.
      </p>
    </footer>
  );
}
