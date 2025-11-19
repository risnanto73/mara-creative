import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>
            We Build Modern <span>Web & Mobile Apps</span>
          </h1>
          <p>
            Mara Creative adalah software house yang fokus pada pembuatan
            website & aplikasi modern dengan teknologi Laravel, React.js dan Flutter.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              Diskusikan Project
            </a>
            <a href="#portfolio" className="btn ghost">
              Lihat Portfolio
            </a>
          </div>
          <div className="hero-meta">
            <span>10+ Client</span>
            <span>20+ Project Selesai</span>
            <span>100% Custom Development</span>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Tech Stack Utama</p>
          <ul>
            <li>Larave & React.js untuk Web</li>
            <li>Laravel untuk Mobile Apps</li>
            <li>REST API / GraphQL</li>
            <li>UI/UX Design Support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
