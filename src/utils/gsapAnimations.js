import gsap from 'gsap';

// Fade In Up Animation
export const animateFadeInUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1, delay: delay, ease: 'power3.out' }
  );
};

// Stagger Animation (Multiple items ke liye jaise stats ya cards)
export const animateStagger = (elements, delay = 0) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: delay, ease: 'power3.out' }
  );
};