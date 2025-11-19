import React from "react";

function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About Us</h2>
          <p>
            Mara Creative adalah tim developer dan designer yang berfokus
            pada pembuatan produk digital berkualitas dengan teknologi modern.
          </p>
          <p>
            Kami membantu bisnis Anda memiliki sistem digital yang scalable,
            mudah di-maintain, dan punya tampilan profesional.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight">
            <span className="highlight-number">3+</span>
            <span className="highlight-label">Tahun Pengalaman</span>
          </div>
          <div className="highlight">
            <span className="highlight-number">20+</span>
            <span className="highlight-label">Project</span>
          </div>
          <div className="highlight">
            <span className="highlight-number">10+</span>
            <span className="highlight-label">Client</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
