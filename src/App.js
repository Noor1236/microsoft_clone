import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";
import BusinessShowcase from "./components/BusinessShowcase";
import OrganizeLifeSection from "./components/OrganizeLifeSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Ensure all text is white in dark mode */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <HeroSection />
        <ProductShowcase />
        <OrganizeLifeSection />
        <BusinessShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default App;
