import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    
    // Header animation on scroll
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

    // Project cards stagger animation on scroll
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const projectsList = [
    {
      title: 'Skyline Real Estate Portal',
      category: 'Web Design',
      image: '/src/assets/home/web-designing-1.jpg',
    },
    {
      title: 'MediCare SaaS Landing Page',
      category: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Luxury Brand Product Catalog',
      category: 'Catalog Design',
      image: '/src/assets/home/catalogue-design.jpg',
    },
    {
      title: 'Commercial Studio Photoshoot',
      category: 'Professional Photoshoot',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Brand Growth Analytics',
      category: 'Digital Marketing',
      image: '/src/assets/home/catalogue-desig-1n.jpg',
    },
   {
  title: 'Aura Luxury Sanitary Ware',
  category: 'E-Commerce & Design',
  image: '/src/assets/home/sanitary-ware.jpg',
}
  ];

  return (
    <section className="projects-section" id="portfolio" ref={sectionRef}>
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="projects-header" ref={headerRef}>
          <span className="projects-subtitle">OUR WORK</span>
         <h2 className="projects-main-title">Crafting Digital Excellence  Explore Our Finest Work</h2>
        </div>

        {/* Modern Editorial Layout */}
        <div className="projects-grid" ref={gridRef}>
          {projectsList.map((project, index) => (
            <div className={`project-item item-${index + 1}`} key={index}>
              <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-hover-layer">
                  <span className="hover-category">{project.category}</span>
                  <h3 className="hover-title">{project.title}</h3>
                </div>
              </div>
              <div className="project-meta">
                <h3 className="project-name">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}