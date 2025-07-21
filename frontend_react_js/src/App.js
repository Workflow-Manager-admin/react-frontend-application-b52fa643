import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

// PUBLIC_INTERFACE
/**
 * Main SPA container, wires up layout, theming, and state for navigation.
 * Uses process.env for placeholder config (e.g., REACT_APP_API_BASE_URL).
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState("home");

  // Effect to apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // PUBLIC_INTERFACE
  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Header onNav={handleNav} theme={theme} onToggleTheme={toggleTheme} />
      <MainContent currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
