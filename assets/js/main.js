const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navItem = document.querySelectorAll(".nav__item"),
  header = document.getElementById("header");

// Ensure projects are visible immediately
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project__content').forEach((card) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
    card.style.display = card.classList.contains('project__app-card') ? 'flex' : 'block';
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

// Companies section
sr.reveal(".companies__card", {
  delay: 150,
  interval: 80,
  origin: "bottom",
  distance: "40px",
  scale: 0.95,
  duration: 800
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

// Sort project cards by Google Play download count (descending) before the
// Projects grid, Project Logos grid, and "show more" logic read from the DOM.
// Numbers come from each card's data-downloads attribute (Play Store lower bound).
// Cards without a value (e.g. apps with no public download count) sort last.
(() => {
  const grid = document.querySelector('.project__all-wrapper');
  if (!grid) return;

  const anchor = grid.querySelector('.project__show-more');
  const toNumber = (card) => {
    const value = Number.parseInt(card.dataset.downloads, 10);
    return Number.isNaN(value) ? -1 : value;
  };

  const sorted = [...grid.querySelectorAll('.project__app-card:not(.project__show-more)')]
    .map((card, index) => ({ card, index, downloads: toNumber(card) }))
    .sort((a, b) => (b.downloads - a.downloads) || (a.index - b.index));

  for (const { card } of sorted) {
    if (anchor) {
      grid.insertBefore(card, anchor);
    } else {
      grid.appendChild(card);
    }
  }
})();

const projectGrid = document.querySelector('.project__all-wrapper');
const projectCards = projectGrid ? [...projectGrid.querySelectorAll('.project__app-card:not(.project__show-more)')] : [];
const projectLogoGrid = document.querySelector('#project-logo-grid');
const showMoreCard = projectGrid?.querySelector('.project__show-more');
let projectCardsExpanded = false;

if (projectLogoGrid) {
  for (const card of projectCards) {
    const role = card.querySelector('.project__app-mark span')?.textContent.trim();
    if (!['Built', 'Worked on', 'Published'].includes(role)) continue;

    const title = card.querySelector('.project__title')?.textContent.trim();
    const image = card.querySelector('.project__app-image--logo, .project__icon');
    const storeLink = card.querySelector('a.project__app-link[href*="play.google.com/store/apps/details?id="]');
    if (!title || !image || !storeLink) continue;

    const link = document.createElement('a');
    link.className = 'project-logo-link';
    link.href = storeLink.href;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.setAttribute('aria-label', `${title}, ${role}`);

    const logo = document.createElement('img');
    logo.src = image.currentSrc || image.src;
    logo.alt = '';
    logo.loading = 'lazy';
    logo.decoding = 'async';

    const text = document.createElement('span');
    text.className = 'project-logo__text';
    const name = document.createElement('strong');
    name.textContent = title;
    const contribution = document.createElement('small');
    contribution.textContent = role;
    text.append(name, contribution);
    link.append(logo, text);
    projectLogoGrid.append(link);
  }
}

function updateProjectCardVisibility() {
  if (!projectGrid || !showMoreCard) return;

  const columns = getComputedStyle(projectGrid).gridTemplateColumns.split(/\s+/).filter(Boolean).length;
  const visibleCardCount = Math.max(1, columns * 3 - 1);

  projectCards.forEach((card, index) => {
    card.classList.toggle('is-hidden', !projectCardsExpanded && index >= visibleCardCount);
  });

  showMoreCard.hidden = projectCards.length <= visibleCardCount;
  showMoreCard.setAttribute('aria-expanded', String(projectCardsExpanded));
  showMoreCard.querySelector('span').textContent = projectCardsExpanded ? 'Show fewer projects' : 'Show more projects';
  showMoreCard.querySelector('i').className = projectCardsExpanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line';
}

showMoreCard?.addEventListener('click', () => {
  projectCardsExpanded = !projectCardsExpanded;
  updateProjectCardVisibility();
});

updateProjectCardVisibility();
window.addEventListener('resize', updateProjectCardVisibility);

// Hover preview popup for project cards.
// Resting the cursor on a card for a moment opens a small popup with the
// app icon, role, downloads/publisher, and the full description.
// Only runs on devices with a real hover-capable pointer.
(() => {
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!supportsHover || !projectCards.length) return;

  const popup = document.createElement('div');
  popup.className = 'project-popup';
  popup.setAttribute('aria-hidden', 'true');
  document.body.appendChild(popup);

  const SHOW_DELAY_MS = 300;
  let showTimer = null;
  let activeCard = null;

  const hidePopup = () => {
    window.clearTimeout(showTimer);
    showTimer = null;
    activeCard = null;
    popup.classList.remove('is-visible');
  };

  const buildPopup = (card) => {
    const title = card.querySelector('.project__title')?.textContent.trim();
    if (!title) return false;

    const icon = card.querySelector('.project__app-image--logo, .zstack .project__icon, .project__icon, .project__img');
    const role = card.querySelector('.project__app-mark span')?.textContent.trim() || '';
    const downloads = card.querySelector('.project__app-downloads')?.textContent.trim() || '';
    const publisher = card.querySelector('.project__app-publisher')?.textContent.trim() || '';
    const description = card.querySelector('.project__app-description, .project__description')?.textContent.trim() || '';

    popup.replaceChildren();

    const head = document.createElement('div');
    head.className = 'project-popup__head';

    if (icon && (icon.currentSrc || icon.src)) {
      const img = document.createElement('img');
      img.className = 'project-popup__icon';
      img.src = icon.currentSrc || icon.src;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      head.appendChild(img);
    }

    const headText = document.createElement('div');
    headText.className = 'project-popup__head-text';

    if (role) {
      const mark = document.createElement('span');
      mark.className = 'project-popup__mark';
      mark.textContent = role;
      headText.appendChild(mark);
    }

    const name = document.createElement('h4');
    name.className = 'project-popup__title';
    name.textContent = title;
    headText.appendChild(name);
    head.appendChild(headText);
    popup.appendChild(head);

    const metaParts = [downloads, publisher].filter(Boolean);
    if (metaParts.length) {
      const meta = document.createElement('p');
      meta.className = 'project-popup__meta';
      meta.textContent = metaParts.join(' · ');
      popup.appendChild(meta);
    }

    if (description) {
      const desc = document.createElement('p');
      desc.className = 'project-popup__description';
      desc.textContent = description;
      popup.appendChild(desc);
    }

    return true;
  };

  const positionPopup = (card) => {
    const rect = card.getBoundingClientRect();
    const popWidth = popup.offsetWidth;
    const popHeight = popup.offsetHeight;

    let left = rect.left + rect.width / 2 - popWidth / 2;
    left = Math.min(Math.max(12, left), window.innerWidth - popWidth - 12);

    let top = rect.top - popHeight - 14;
    if (top < 12) {
      top = Math.min(rect.bottom + 14, window.innerHeight - popHeight - 12);
    }

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  };

  for (const card of projectCards) {
    card.addEventListener('mouseenter', () => {
      window.clearTimeout(showTimer);
      hidePopup();
      activeCard = card;
      showTimer = window.setTimeout(() => {
        if (activeCard !== card || !card.matches(':hover')) return;
        if (!buildPopup(card)) return;
        positionPopup(card);
        popup.classList.add('is-visible');
      }, SHOW_DELAY_MS);
    });

    card.addEventListener('mouseleave', hidePopup);
  }

  window.addEventListener('scroll', hidePopup, { passive: true });
  window.addEventListener('resize', hidePopup);
})();
