import React, { useState, useEffect } from "react";
import "../assets/css/navbar.css";
import { NavLink, useLocation } from "react-router-dom"; // changed: add useLocation
import Logo from "../assets/img/NN_Logo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // added

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : original;
    return () => { document.body.style.overflow = original; };
  }, [menuOpen]);

  // close mobile menu on route change
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  }, [location]); // added

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <a href="/" className="logo-link-btn">
          <img src={Logo} alt="Native & Nature Logo" className="logo-link-img" />
          <span className="logo-link-text">Native & Nature</span>
        </a>

        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
