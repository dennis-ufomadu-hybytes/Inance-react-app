import React from "react";

function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved By{" "}
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
