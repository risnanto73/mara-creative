import React from "react";

const projects = [
  {
    name: "SIPPRA",
    type: "Web Application",
    tech: "Laravel + Boostrap",
    desc: "Dashboard e-learning untuk manajemen sekolah dan proses belajar mengajar.",
  },
  {
    name: "SIPPRA Mobile",
    type: "Mobile App",
    tech: "Flutter",
    desc: "Aplikasi mobile untuk siswa dan guru dalam mengakses materi pembelajaran.    ",
  },
  {
    name: "Vendii Global",
    type: "Landing Page",
    tech: "React + Tailwind + Laravel",
    desc: "Landing Page untuk Vending Machine Perfume dengan AI Recommendation System.",
  },
  {
    name: "Warung Kebunqu",
    type: "Landing Page",
    tech: "Tailwind CSS",
    desc: "Landing page untuk Restaurant di Sentul Bogor dan booking villa.",
  },
  {
    name: "POS Warung Kebunqu",
    type: "Web Application",
    tech: "Laravel + Boostrap",
    desc: "Aplikasi Point of Sale untuk manajemen penjualan dan Payment Gateway MIDTRANS.",
  },
  {
    name: "FoodieApp",
    type: "Mobile App",
    tech: "React Native",
    desc: "Aplikasi pemesanan makanan dengan integrasi pembayaran online.",
  },
];

function Portfolio() {
  return (
    <section className="section section-alt" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          Beberapa project yang pernah kami kerjakan untuk klien dari berbagai industri.
        </p>
        <div className="grid">
          {projects.map((p) => (
            <div key={p.name} className="card card-portfolio">
              <div className="card-portfolio-header">
                <h3>{p.name}</h3>
                <span className="badge">{p.type}</span>
              </div>
              <p className="tagline">{p.tech}</p>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
