import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside or pressing Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-container') && !event.target.closest('.offcanvas-menu')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
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
          {/* Menu button */}
          <div className="menu-container">
            <button 
              className="menu-button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`menu-line ${isMenuOpen ? 'line-1-open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'line-2-open' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'line-3-open' : ''}`}></span>
            </button>
          </div>

          <div className="logo-container">
            <h3 className="logo-text">DigiTech Innovation Lab</h3>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu */}
      <div className={`offcanvas-menu ${isMenuOpen ? 'offcanvas-open' : ''}`}>
        <div className="offcanvas-header">
          <h3 className="offcanvas-title">Menu</h3>
          <button className="offcanvas-close" onClick={toggleMenu} aria-label="Close menu">
            &times;
          </button>
        </div>  
        <div className="offcanvas-body">
          <Link className="offcanvas-item" onClick={toggleMenu} to='/home'>Home</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/growthAdvisary'>Growth Advisory</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/ConsultingAndAdvisory'>Consulting And Advisory</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/TechnologyTransformation'>Technology Transformation</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/Next-GenServices'>Next-Gen Services</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/TalentUnleashed'>Talent Unleashed</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/csr'>CSR</Link>
          <Link className="offcanvas-item" onClick={toggleMenu}  to='/OurSolutions'>Our Solutions</Link>
          
         
        
        </div>
      </div>

      {/* Backdrop when menu is open */}
      {isMenuOpen && <div className="offcanvas-backdrop" onClick={toggleMenu}></div>}
    </>
  );
}

export default Header;