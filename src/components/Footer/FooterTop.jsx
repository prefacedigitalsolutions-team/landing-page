import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FooterTop.css';

gsap.registerPlugin(ScrollTrigger);

export default function FooterTop() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="footer-top-section" ref={sectionRef}>
      <div className="footer-bg-image"></div>
      <div className="footer-bg-overlay"></div>

      <div className="footer-top-container" ref={contentRef}>
        <span className="footer-top-subtitle">READY TO GROW YOUR BUSINESS?</span>
        <h2 className="footer-top-title">
          Let&apos;s Build a Powerful Website<br /> That Takes Your Business Ahead
        </h2>
        <a href="#contact" className="footer-quote-btn">
          GET A FREE QUOTE <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}