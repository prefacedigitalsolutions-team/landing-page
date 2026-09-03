import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation on Scroll
      gsap.from(".about-top > div", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Cards Stagger Animation on Scroll
      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const servicesData = [
    {
      icon: "fas fa-book-open",
      title: "Catalog Design",
      desc: "Creative and professional catalog designs that showcase your products effectively."
    },
    {
      icon: "fas fa-print",
      title: "Catalogue Printing",
      desc: "High-quality, premium printing services to give your catalogs a tangible edge."
    },
    {
      icon: "fas fa-camera",
      title: "Photoshoot",
      desc: "Professional product and commercial photography to elevate your brand visual identity."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Web Design",
      desc: "Creative, modern & user-friendly designs that make a lasting impression."
    },
    {
      icon: "fas fa-file-alt",
      title: "Landing Pages",
      desc: "High-converting landing pages that turn visitors into customers."
    },
    {
      icon: "fas fa-bullhorn",
      title: "Digital Marketing",
      desc: "Result-driven digital marketing strategies to grow your business online."
    }
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        
        {/* Top Header Layout */}
        <div className="about-top">
          <div className="about-header-content">
            <span className="about-subtitle">WHAT WE DO</span>
            <h2 className="about-title">
              Complete Web & Media Solutions <br />
              To Grow Your Business
            </h2>
          </div>
          <div className="about-desc">
            <p>
              We offer end-to-end creative and digital solutions tailored to your brand goals. Modern, responsive and result-driven.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="about-grid">
          {servicesData.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="card-icon-box">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}