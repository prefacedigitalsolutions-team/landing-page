import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Left Content Animation
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Right Form Card Animation
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        
        {/* Left Side: Why Choose Us & Stats */}
        <div className="contact-left" ref={leftRef}>
          <span className="contact-subtitle">WHY CHOOSE US</span>
          <h2 className="contact-main-title">
            We Don&apos;t Just Build Websites,<br /> We Build Success Stories.
          </h2>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div>
                <h4>Custom Solutions</h4>
                <p>Tailored solutions designed for your unique business needs.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <h4>Result Driven</h4>
                <p>We focus on delivering results that grow your business.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h4>Quality & Performance</h4>
                <p>High performance websites that ensure speed, security & scalability.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>We&apos;re always here to support you whenever you need us.</p>
              </div>
            </div>
          </div>

          {/* Stats Counters */}
          
        </div>

        {/* Right Side: Contact Form Card */}
        <div className="contact-right" ref={rightRef}>
          <div className="contact-form-card">
            <h3>Let&apos;s Start Your Next Project</h3>
            <p>Have a project in mind? Let&apos;s talk and build something amazing together.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project" rows="3" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                GET A FREE QUOTE <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}