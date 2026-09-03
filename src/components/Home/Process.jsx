import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      headerRef.current,
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

    const stepItems = stepsRef.current.children;
    gsap.fromTo(
      stepItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const processList = [
    {
      num: '01',
      title: 'Discover',
      desc: 'We analyze your business goals, target audience, and core requirements.',
    },
    {
      num: '02',
      title: 'Plan & Design',
      desc: 'We craft strategic layouts and stunning UI/UX tailored to your brand.',
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'We build your platform using clean, high-performance technologies.',
    },
    {
      num: '04',
      title: 'Launch & Support',
      desc: 'We deploy your project seamlessly and ensure continuous maintenance.',
    },
  ];

  return (
    <section className="process-section" id="process" ref={sectionRef}>
      <div className="process-container">
        
        <div className="process-header" ref={headerRef}>
          <span className="process-subtitle">OUR PROCESS</span>
          <h2 className="process-main-title">Our Simple 4-Step Process To Deliver Great Results</h2>
        </div>

        <div className="process-wrapper" ref={stepsRef}>
          {processList.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="process-step-header">
                <span className="process-number">{step.num}</span>
                <div className="process-line"></div>
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}