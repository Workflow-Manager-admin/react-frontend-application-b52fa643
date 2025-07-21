import React from "react";
import "./MainContent.css";

// PUBLIC_INTERFACE
/**
 * Placeholder for the main content area. Switches content by page.
 */
function MainContent({ currentPage }) {
  return (
    <main className="main-content" tabIndex="-1">
      {currentPage === "home" && (
        <section>
          <h1>Welcome to MyApp</h1>
          <p>
            This is a modern, minimal React SPA scaffold.<br />
            You can extend this layout by adding more features or components.
          </p>
        </section>
      )}
      {currentPage === "about" && (
        <section>
          <h1>About</h1>
          <p>
            MyApp is built for speed, extensibility and style.
            <br />
            Base colors (primary/secondary/accent) and theme are easily customizable.
          </p>
        </section>
      )}
      {currentPage === "features" && (
        <section>
          <h1>Features</h1>
          <ul>
            <li>Responsive design (try resizing your window!)</li>
            <li>Navigation header & footer</li>
            <li>Theming (light/dark switcher)</li>
            <li>Minimal, accessible code</li>
            <li>Easy to extend</li>
          </ul>
        </section>
      )}
      {currentPage === "contact" && (
        <section>
          <h1>Contact</h1>
          <p>
            Placeholder for a contact form or contact info.<br />
            Edit <code>MainContent.js</code> to customize this section.
          </p>
        </section>
      )}
    </main>
  );
}

export default MainContent;

