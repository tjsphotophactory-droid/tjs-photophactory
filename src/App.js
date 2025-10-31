import React from "react";
import "./App.css";

function App() {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginTop: "50px" }}>TJ’s Photo Phactory</h1>
      <p style={{ color: "gray" }}>
        Welcome to my photography portfolio. Coming soon…
      </p>
    </div>
  );
}

export default App;
