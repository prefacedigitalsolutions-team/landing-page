import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StaticBanner.css';

gsap.registerPlugin(ScrollTrigger);

export default function StaticBanner() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.static-banner',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="static-banner">
      <div className="static-banner-overlay"></div>
      <div className="static-banner-content" ref={contentRef}>
        <h2></h2>
      </div>
    </section>
  );
}