import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Banar.css';

export default function Banar() {
  const compRef = useRef(null);

  useEffect(() => {
    // GSAP Context for safety and clean up
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Left Content Elements
      tl.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
      .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.5")
      .from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(".hero-buttons", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")

      // Right Mockup Image Animation
      .from(".hero-mockup", {
        scale: 0.9,
        y: 50,
        opacity: 0,
        duration: 1.2,
      }, "-=1")

      // Bottom Stats Stagger Animation
      .from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      }, "-=0.8");

    }, compRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="hero-section" id="home" ref={compRef}>
      <div className="hero-container">
        
        {/* Left Content Area */}
        <div className="hero-content">
          <span className="hero-subtitle">CATALOG • PHOTOSHOOT • PRINTING • WEB • MARKETING</span>
          
          <h1 className="hero-title">
            Creative Design & <br />
            Digital Growth <br />
            <span className="gold-text">All Under One Roof</span>
          </h1>
          
          <p className="hero-description">
            Elevate your brand with professional catalog design, striking photoshoots, high-quality printing, high-converting web design, landing pages, and result-driven digital marketing.
          </p>
          
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              VIEW OUR WORK <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn-secondary">
              TALK TO EXPERT <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Right Mockup Area */}
        <div className="hero-mockup">
          <img 
            src="/src/assets/home/banar-img.png" 
            alt="Agency Creative Services Mockup" 
            className="mockup-img" 
          />
        </div>

      </div>

      {/* Bottom Stats Row */}
      <div className="hero-stats">
        <div className="stat-item">
          <i className="fas fa-award stat-icon"></i>
          <div>
            <h3>22+</h3>
            <p>Years of Experience</p>
          </div>
        </div>

        <div className="stat-item">
          <i className="fas fa-check-circle stat-icon"></i>
          <div>
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className="stat-item">
          <i className="fas fa-smile stat-icon"></i>
          <div>
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

        <div className="stat-item">
          <i className="fas fa-headset stat-icon"></i>
          <div>
            <h3>Dedicated</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}