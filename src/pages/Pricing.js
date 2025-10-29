import React from "react";

export default function Pricing() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Pricing</h1>
      <p>Explore our photography session packages and rates below.</p>

      <div style={{ maxWidth: "500px", margin: "2rem auto", textAlign: "left" }}>
        <h3>Portrait Photography</h3>
        <p>$150 — 1 hour and over</p>
        <p>$65 — under 1 hour</p>
        <p><em>Includes editing</em></p>

        <h3>Individual Photography</h3>
        <p>$55 — every 30 minutes</p>
        <p><em>Includes editing</em></p>

        <h3>Headshot Photography</h3>
        <p>$100 — single session</p>
        <p><em>Includes editing</em></p>

        <h3>Passport Photos</h3>
        <p>$12 — includes printing</p>
      </div>
    </div>
  );
}
