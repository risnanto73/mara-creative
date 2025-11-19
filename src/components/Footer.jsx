import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Mara Creative. All rights reserved.</p>
        <p className="footer-secondary">
          Made with React. Available for freelance & partnership.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
