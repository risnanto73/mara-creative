import React from "react";

function Header() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Mara Creative</div>
        <nav className="nav">
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToSection("process")}>Process</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;