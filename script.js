document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const header = document.getElementById('header');
  const nav = document.getElementById('main-nav');
  const menuBtn = document.getElementById('menu-btn');
  const modeToggle = document.getElementById('mode-toggle');
  
  // Layout views
  const landingLayout = document.getElementById('landing-layout');
  const presentationLayout = document.getElementById('presentation-layout');
  
  // Slides elements
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev-slide-btn');
  const nextBtn = document.getElementById('next-slide-btn');
  const currentSlideNum = document.getElementById('current-slide-num');
  
  // Chart and counter triggers
  const marketSection = document.getElementById('market');
  const counterMarket = document.getElementById('counter-market');
  const chartSection = document.getElementById('commission-chart-container');
  const chartBars = document.querySelectorAll('.chart-bar');
  
  // Form elements
  const contactForm = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');

  let currentSlideIndex = 1;
  const totalSlides = slides.length;

  // --- Header Scroll Effect ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Highlight Active Section on Scroll
    const scrollPosition = window.scrollY + 100;
    const sections = ['hero', 'problems', 'solution', 'features', 'market', 'comparison', 'timeline', 'contact'];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll('#main-nav a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${sectionId}`) {
              a.classList.add('active');
            }
          });
        }
      }
    });
  });

  // --- Mobile Menu Toggle ---
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuBtn.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // Close mobile nav when clicking a link
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // --- Mode Toggle Logic (Landing vs Presentation) ---
  modeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      // Switch to Slide Presentation Mode
      document.body.classList.add('presentation-mode');
      landingLayout.style.display = 'none';
      presentationLayout.style.display = 'flex';
      
      // Update header links visibility or disable scroll highlight
      document.querySelectorAll('#main-nav a').forEach(a => a.classList.remove('active'));
      
      // Reset to slide 1 and render
      currentSlideIndex = 1;
      showSlide(currentSlideIndex);
      
      // Stop body scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Switch back to Scrollable Landing Page Mode
      document.body.classList.remove('presentation-mode');
      landingLayout.style.display = 'block';
      presentationLayout.style.display = 'none';
      
      // Reset bars inside slide mode
      resetSlideBars();
      
      // Restore body scrolling
      document.body.style.overflow = 'auto';
      
      // Re-trigger counter & chart intersection observers
      triggerLandingObservers();
    }
  });

  // --- Slide Deck Viewer Controls ---
  function showSlide(index) {
    if (index < 1) index = 1;
    if (index > totalSlides) index = totalSlides;
    
    currentSlideIndex = index;
    currentSlideNum.textContent = currentSlideIndex;
    
    // Toggle active slide class
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'prev');
      const slideNum = parseInt(slide.getAttribute('data-slide'));
      
      if (slideNum === currentSlideIndex) {
        slide.classList.add('active');
      } else if (slideNum < currentSlideIndex) {
        slide.classList.add('prev');
      }
    });

    // Disable navigation buttons at boundaries
    prevBtn.disabled = currentSlideIndex === 1;
    nextBtn.disabled = currentSlideIndex === totalSlides;

    // Handle Slide-Specific Animations
    if (currentSlideIndex === 8) {
      animateSlideBars();
    } else {
      resetSlideBars();
    }
  }

  prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 1) {
      showSlide(currentSlideIndex - 1);
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < totalSlides) {
      showSlide(currentSlideIndex + 1);
    }
  });

  // Keyboard navigation for presentation mode
  window.addEventListener('keydown', (e) => {
    if (!document.body.classList.contains('presentation-mode')) return;
    
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      if (currentSlideIndex < totalSlides) {
        showSlide(currentSlideIndex + 1);
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlideIndex > 1) {
        showSlide(currentSlideIndex - 1);
      }
    }
  });

  // Animate progress bars in slide 8
  function animateSlideBars() {
    const slideBars = document.querySelectorAll('#slide-commission-chart .chart-bar');
    slideBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }

  function resetSlideBars() {
    const slideBars = document.querySelectorAll('#slide-commission-chart .chart-bar');
    slideBars.forEach(bar => {
      bar.style.width = '0';
    });
  }

  // --- Scroll-Triggered Animations (Landing Page) ---
  
  // 1. Counter animation
  const animateCounter = () => {
    let count = 0;
    const target = 73;
    const duration = 1500; // ms
    const increment = target / (duration / 16); // ~60fps
    
    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        counterMarket.textContent = target + '%';
      } else {
        counterMarket.textContent = Math.floor(count) + '%';
        requestAnimationFrame(updateCounter);
      }
    };
    updateCounter();
  };

  // 2. Chart bar animation
  const animateLandingBars = () => {
    chartBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  };

  const resetLandingBars = () => {
    chartBars.forEach(bar => {
      bar.style.width = '0';
    });
  };

  // Observers for Landing Page scroll animations
  let counterObserver;
  let chartObserver;

  function triggerLandingObservers() {
    // Clean up existing observers if any
    if (counterObserver) counterObserver.disconnect();
    if (chartObserver) chartObserver.disconnect();

    // Counter observer
    counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (marketSection) {
      counterObserver.observe(marketSection);
    }

    // Chart observer
    chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateLandingBars();
        } else {
          resetLandingBars(); // Reset when scrolled out, so it re-animates nicely
        }
      });
    }, { threshold: 0.2 });

    if (chartSection) {
      chartObserver.observe(chartSection);
    }
  }

  // Initial trigger for landing page observers
  triggerLandingObservers();

  // --- Contact Form Handling ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitButton.innerHTML;
      
      // Show sending state
      submitButton.disabled = true;
      submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Jiberilmekte...';
      formResponse.className = 'form-message';
      formResponse.textContent = '';
      
      // Simulate API call
      setTimeout(() => {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalBtnText;
        
        // Show success message
        formResponse.className = 'form-message success';
        formResponse.textContent = 'Xabarıńız tabıslı jiberildi! Tez arada siz benen baylanısamız.';
        
        // Reset form
        contactForm.reset();
        
        // Fade out success message after 5 seconds
        setTimeout(() => {
          formResponse.style.transition = 'opacity 0.5s ease';
          formResponse.style.opacity = '0';
          setTimeout(() => {
            formResponse.className = 'form-message';
            formResponse.style.opacity = '1';
            formResponse.textContent = '';
          }, 500);
        }, 5000);
        
      }, 1200);
    });
  }
});
