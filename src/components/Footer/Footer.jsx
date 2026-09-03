import { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [isContactActive, setIsContactActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      const footerSection = document.querySelector('.footer-section');
      
      let contactVisible = false;
      let footerVisible = false;

      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Check if contact section is currently in viewport
        contactVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
      }

      if (footerSection) {
        const rect = footerSection.getBoundingClientRect();
        // Check if footer is currently in viewport
        footerVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
      }

      // Agar contact section ya footer screen par hai, toh active kar do
      if (contactVisible || footerVisible) {
        setIsContactActive(true);
      } else {
        setIsContactActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span className="logo-icon">P</span>
            <div className="logo-text">
              <h3>PREFACE</h3>
              <span>COMMUNICATIONS</span>
            </div>
          </div>
          <p className="footer-desc">
            We design and develop modern, responsive and result-driven websites that help businesses grow online.
          </p>
          <div className="footer-socials">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#process">Process</a></li>
            <li>
              <a 
                href="#contact" 
                className={isContactActive ? 'footer-link-active' : ''}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li><a href="#web-design">Website Design</a></li>
            <li><a href="#web-dev">Website Development</a></li>
            <li><a href="#landing">Landing Pages</a></li>
            <li><a href="#ecommerce">E-commerce</a></li>
            <li><a href="#maintenance">Maintenance</a></li>
            <li><a href="#seo">SEO Services</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>OTHER LINKS</h4>
          <ul>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <i className="fas fa-phone-alt"></i>
              <span>+91 98766 43210</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>hello@prefacecommunications.com</span>
            </li>
            <li>
              <i className="fas fa-globe"></i>
              <span>www.prefacecommunications.com</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>123, Business Park,<br />New Delhi - 110001, India</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Preface Communications. All Rights Reserved.</p>
      </div>
    </footer>
  );
}