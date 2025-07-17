// Basic JS for future features - Eury Azucena Portfolio

// Example: Smooth scroll for anchor links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Navbar shrink on scroll (optional effect)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// You can add more interactivity here later:
// - Back to top button
// - Lightbox for project images
// - Animate on scroll libraries (AOS.js)
// - Dark mode toggle (advanced!)

// For the Index Typing
document.addEventListener("DOMContentLoaded", function () {
  const roles = [
    "SOC Analyst Enthusiast",
    "Full Stack Developer Enthusiast",
    "AI/ML Enthusiast",
    "Computer Engineer"
  ];

  let i = 0; // which role
  let j = 0; // which character
  let isDeleting = false;
  let typingSpeed = 100;
  const pauseDelay = 1000; // 1 second pause
  const textElement = document.getElementById("typing-text");

  function type() {
    const currentRole = roles[i];
    if (!isDeleting) {
      textElement.textContent = currentRole.slice(0, j + 1);
      j++;
      if (j === currentRole.length) {
        isDeleting = true;
        setTimeout(type, pauseDelay);
        return;
      }
    } else {
      textElement.textContent = currentRole.slice(0, j - 1);
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : typingSpeed);
  }

  type();
});



