import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini bisa diintegrasikan dengan backend / email service
    console.log("Form submit:", form);
    alert("Terima kasih! Kami akan menghubungi Anda secepatnya.");
    setForm({ name: "", email: "", message: "", budget: "" });
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Ceritakan kebutuhan project Anda, kami akan kirimkan estimasi harga
            & timeline.
          </p>
          <ul className="contact-info">
            <li>Email: hello@codecraft.agency</li>
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Location: Jakarta, Indonesia</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nama
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Perkiraan Budget
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="Contoh: 10-30 juta"
            />
          </label>
          <label>
            Deskripsi Project
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn primary full">
            Kirim Brief
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
