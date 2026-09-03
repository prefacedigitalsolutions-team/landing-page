import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Service.css';

gsap.registerPlugin(ScrollTrigger);

export default function Service() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Header Animation
    gsap.fromTo(
      el.querySelector('.industry-top'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Stagger Animation for Grid Cards
    gsap.fromTo(
      el.querySelectorAll('.industry-item'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('.industry-grid'),
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const industriesList = [
    { icon: 'fas fa-home', title: 'Real Estate', desc: 'Properties & listings.' },
    { icon: 'fas fa-heart', title: 'Healthcare', desc: 'Clinics & medical.' },
    { icon: 'fas fa-graduation-cap', title: 'Education', desc: 'Schools & courses.' },
    { icon: 'fas fa-shopping-cart', title: 'E-commerce', desc: 'Online stores & retail.' },
    { icon: 'fas fa-store', title: 'Restaurant', desc: 'Cafes & dining.' },
    { icon: 'fas fa-bone', title: 'Travel', desc: 'Tours & agencies.' },
    { icon: 'fas fa-dumbbell', title: 'Fitness', desc: 'Gyms & training.' },
    { icon: 'fas fa-shopping-bag', title: 'Business', desc: 'Corporate & startups.' },
    { icon: 'fas fa-laptop-code', title: 'Technology', desc: 'Software & IT.' },
    { icon: 'fas fa-box-open', title: 'And More', desc: 'Custom solutions.' }
  ];

  return (
    <section className="industry-section" id="services" ref={sectionRef}>
      <div className="industry-container">
        
        <div className="industry-top">
          <h2 className="industry-title">WE DESIGN FOR EVERY INDUSTRY</h2>
          <p className="industry-subtitle">Tailored creative solutions built specifically to elevate your unique business sector.</p>
        </div>

        <div className="industry-grid">
          {industriesList.map((item, index) => (
            <div className="industry-item" key={index}>
              <div className="industry-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3 className="industry-name">{item.title}</h3>
              <p className="industry-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}