import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/graduation1.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu.png";
function Navbar() {
  const [sticky, setSticky] = useState("false");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  function togglemenu() {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img className="logo" src={logo} alt="logo" />
      <ul className={mobileMenu ? "hide-mobile-menu" : ""}>
        <li>
          <Link to="hero" smooth={true} offset={-250} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-250} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-250} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-250} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-250} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-250}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={togglemenu} />
    </nav>
  );
}

export default Navbar;
