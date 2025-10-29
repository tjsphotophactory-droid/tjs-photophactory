import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Tj's Photophactory</h1>
      <p>Professional Headshots & Portrait Photography</p>
      <Link to="/booking">
        <button>Book a Session</button>
      </Link>
    </div>
  );
}
