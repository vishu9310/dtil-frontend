import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.offcanvas-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <Helmet>
        <title>DigiTech Innovation Lab</title>
      </Helmet>

      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-content">
          {/* Menu button (hamburger) */}
          <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`menu-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
            <span className={`menu-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
            <span className={`menu-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
          </button>

          {/* Logo */}
          <div className="logo-container">
           <a href="/" > <h3 className="logo-text" style={{fontSize:"18px"}}>DigiTech Innovation Lab</h3></a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
       
            <Link to="/growthAdvisary">Growth Advisory</Link>
            <Link to="/ConsultingAndAdvisory">Consulting</Link>
            <Link to="/TechnologyTransformation">Technology</Link>
            <Link to="/Next-GenServices">Next-Gen</Link>
            <Link to="/TalentUnleashed">Talent</Link>
            <Link to="/csr">CSR</Link>
            <Link to="/OurSolutions">Solutions</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'offcanvas-open' : ''}`}>
        <div className="offcanvas-header">
          <h3 className="offcanvas-title">Menu</h3>
          <button className="offcanvas-close" onClick={closeMenu} aria-label="Close menu">&times;</button>
        </div>
        <div className="offcanvas-body">
      
          <Link onClick={closeMenu} to="/growthAdvisary">Growth Advisory</Link>
          <Link onClick={closeMenu} to="/ConsultingAndAdvisory">Consulting And Advisory</Link>
          <Link onClick={closeMenu} to="/TechnologyTransformation">Technology Transformation</Link>
          <Link onClick={closeMenu} to="/Next-GenServices">Next-Gen Services</Link>
          <Link onClick={closeMenu} to="/TalentUnleashed">Talent Unleashed</Link>
          <Link onClick={closeMenu} to="/csr">CSR</Link>
          <Link onClick={closeMenu} to="/OurSolutions">Our Solutions</Link>
        </div>
      </div>

      {isMenuOpen && <div className="offcanvas-backdrop" onClick={closeMenu}></div>}
    </>
  );
}

export default Header;
