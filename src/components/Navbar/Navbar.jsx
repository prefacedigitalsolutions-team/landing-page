import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Navbar.css';

export default function Navbar() {
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // GSAP Entrance Animation for Navbar
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Scroll Spy Logic to track active section automatically
  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Real Logo Section */}
      <div className="nav-logo">
        <a href="#home">
          <img src="/src/assets/home/logo.png" alt="Logo" className="logo-img" />
        </a>
      </div>
      
      {/* Hamburger Menu Toggle for Mobile */}
      <div className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className={activeSection === 'services' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#process" className={activeSection === 'process' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            Process
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''} onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      {/* Social Icons Section */}
      <div className="social-icons">
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </nav>
  );
}