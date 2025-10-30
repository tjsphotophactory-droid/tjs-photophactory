/* 🌐 Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 🖤 Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #0b0b0b;
  color: #f5f5f5;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
  transition: 0.3s ease;
}

a:hover {
  color: #ffb400;
}

/* 🧭 Header */
header {
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: #ffb400;
}

nav a {
  margin: 0 1rem;
  font-weight: 500;
}

nav a:hover {
  color: #fff;
}

/* 🖼️ Hero Section */
.hero {
  background: url('/hero-bg.jpg') center/cover no-repeat;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.hero h1 {
  font-size: 3rem;
  z-index: 1;
  font-weight: 600;
}

.hero p {
  font-size: 1.3rem;
  margin-top: 1rem;
  z-index: 1;
}

.hero button {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  border: none;
  background: #ffb400;
  color: #111;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease;
  z-index: 1;
}

.hero button: hover {
  background: #fff;
  color: #000;
}

/* 📸 Gallery Section */
import React, { useState, useEffect } from "react";
import "./App.css";

function Gallery() {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="gallery" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <span className="close" onClick={closeLightbox}>
              &times;
            </span>
            <img src={images[selectedIndex]} alt="Enlarged" />
            <button className="nav prev" onClick={showPrev}>
              &#10094;
            </button>
            <button className="nav next" onClick={showNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;


{/* 📬 Contact Section */}
<section className="contact">
  <h2>Contact Us</h2>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit" className="cta-btn contact-btn">
      Send Message
    </button>
  </form>
</section>


/* 🧾 Footer */
footer {
  background: #111;
  text-align: center;
  padding: 1.5rem 0;
  color: #aaa;
  font-size: 0.9rem;
}

footer span {
  color: #ffb400;
}
