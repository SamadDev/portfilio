const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

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

// Professional micro-interactions
document.querySelectorAll('.project__content').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-12px) scale(1.03) rotateX(5deg)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
  });
});

// Advanced loading states
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Add professional loading completion animation
  setTimeout(() => {
    document.querySelectorAll('.project__content').forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('loaded');
      }, index * 100);
    });
  }, 500);
});
