import React from "react";
import "./Footer.css";

// PUBLIC_INTERFACE
/**
 * Minimal responsive Footer with copyright & config reference
 */
function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} MyApp &mdash; All rights reserved.
      </div>
      <div className="footer-meta">
        Version: <span>{process.env.REACT_APP_VERSION || "dev"}</span>
      </div>
    </footer>
  );
}

export default Footer;

