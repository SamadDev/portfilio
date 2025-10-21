const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// Ensure projects are visible immediately
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project__content').forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.display = 'block';
  });
});

// open and close menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeIcon();
});

// close the menu when the user clicks the nav links
navItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navMenu.classList.contains("nav__menu--open")) {
      navMenu.classList.remove("nav__menu--open");
    }
    changeIcon();
  });
});

// Change nav toggle icon
function changeIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
  }
}

// Testimonial Slide

const testimonialSlide = new Swiper(".testimonial__wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

// header scroll animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// Advanced ScrollReveal animations with professional effects
const sr = ScrollReveal({
  duration: 1200,
  distance: "60px",
  delay: 100,
  reset: false,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  scale: 0.95,
  opacity: 0,
});

// Hero section with staggered animations
sr.reveal(".hero__content", { 
  origin: "left",
  delay: 200,
  duration: 1500,
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
});

sr.reveal(".hero__img", { 
  origin: "right",
  delay: 400,
  duration: 1500,
  scale: 0.9
});

sr.reveal(".hero__info-wrapper", {
  delay: 600,
  interval: 200,
  origin: "bottom",
  distance: "40px"
});

// Skills section with professional reveal
sr.reveal(".skills__title, .section__title", {
  origin: "top",
  delay: 100,
  duration: 1000
});

sr.reveal(".skill--box", {
  delay: 200,
  interval: 100,
  origin: "bottom",
  scale: 0.8,
  duration: 800
});

// Projects with advanced 3D effects
sr.reveal(".project__content", {
  delay: 100,
  interval: 150,
  origin: "bottom",
  distance: "80px",
  scale: 0.9,
  rotate: { x: 10, y: 0, z: 0 },
  duration: 1200
});

// Qualification with professional timing
sr.reveal(".qualification__name", {
  origin: "left",
  delay: 200,
  duration: 1000
});

sr.reveal(".qualification__item", {
  delay: 300,
  interval: 200,
  origin: "bottom",
  distance: "60px",
  duration: 1000
});

// Footer with elegant reveal
sr.reveal(".footer__content", {
  delay: 200,
  interval: 150,
  origin: "bottom",
  distance: "40px",
  duration: 1000
});

// Advanced intersection observer for performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.project__content, .skill--box, .qualification__item').forEach(el => {
  observer.observe(el);
});

// Advanced micro-interactions with cutting-edge effects
document.querySelectorAll('.project__content').forEach(card => {
  let isHovering = false;
  
  card.addEventListener('mouseenter', (e) => {
    isHovering = true;
    card.style.transform = 'translateY(-25px) scale(1.03) rotateX(5deg) rotateY(2deg)';
    card.style.filter = 'brightness(1.15) contrast(1.2) saturate(1.4) hue-rotate(10deg)';
    card.style.clipPath = 'polygon(0 0, 100% 0, 100% 80%, 90% 100%, 0 100%)';
    
    // Add innovative glow effect
    card.style.boxShadow = `
      0 50px 100px rgba(37, 171, 117, 0.4), 
      0 30px 60px rgba(0, 212, 255, 0.3),
      0 20px 40px rgba(102, 126, 234, 0.2),
      0 10px 20px rgba(240, 147, 251, 0.15),
      0 0 0 3px rgba(37, 171, 117, 0.5),
      inset 0 3px 0 rgba(255, 255, 255, 0.3),
      inset 0 -3px 0 rgba(0, 0, 0, 0.2),
      inset 3px 0 0 rgba(37, 171, 117, 0.4),
      inset -3px 0 0 rgba(0, 212, 255, 0.3)
    `;
  });
  
  card.addEventListener('mouseleave', () => {
    isHovering = false;
    card.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
    card.style.filter = 'brightness(1) contrast(1)';
    card.style.boxShadow = `
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1)
    `;
  });
  
  // Advanced mouse tracking for 3D effects
  card.addEventListener('mousemove', (e) => {
    if (!isHovering) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `
      translateY(-25px) 
      scale(1.03) 
      rotateX(${5 + rotateX}deg) 
      rotateY(${2 + rotateY}deg)
    `;
  });
  
  // Advanced click effects
  card.addEventListener('mousedown', () => {
    card.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg) rotateY(2deg)';
    card.style.transition = 'transform 0.1s ease';
  });
  
  card.addEventListener('mouseup', () => {
    card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    if (isHovering) {
      card.style.transform = 'translateY(-15px) scale(1.05) rotateX(8deg) rotateY(5deg)';
    }
  });
});

// Advanced loading states with cutting-edge effects
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Ensure projects are immediately visible
  document.querySelectorAll('.project__content').forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.classList.add('loaded');
  });
  
  // Add professional loading completion animation with staggered effects
  setTimeout(() => {
    document.querySelectorAll('.project__content').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('loaded');
        // Add cutting-edge entrance animation
        card.style.animation = `slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
      }, index * 150);
    });
  }, 100);
  
  // Add advanced performance monitoring
  if ('performance' in window) {
    const loadTime = performance.now();
    console.log(`Portfolio loaded in ${loadTime.toFixed(2)}ms`);
  }
  
  // Add cutting-edge intersection observer for performance
  const advancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        // Add advanced glow effect on scroll
        entry.target.style.filter = 'brightness(1.05) contrast(1.02)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Observe all project cards for advanced effects
  document.querySelectorAll('.project__content').forEach(card => {
    advancedObserver.observe(card);
  });
});

// Cutting-edge scroll effects
let ticking = false;
function updateScrollEffects() {
  const scrolled = window.pageYOffset;
  const parallax = scrolled * 0.5;
  
  document.querySelectorAll('.project__content').forEach((card, index) => {
    const speed = 0.1 + (index * 0.05);
    const yPos = -(scrolled * speed);
    card.style.transform = `translateY(${yPos}px)`;
  });
  
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
});
