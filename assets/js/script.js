// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

const typing = document.querySelector('.typing-text');
const text = typing.textContent;
typing.textContent = '';

  let i = 0;
  function typeWriter() {
      if (i < text.length) {
          // cria um span só para a letra atual
          const span = document.createElement("span");
          span.textContent = text.charAt(i);
          typing.appendChild(span);

          // cria partículas
          for (let p = 0; p < 5; p++) {
              createParticle(span);
          }

          i++;
          setTimeout(typeWriter, 60);
      }
  }

function createParticle(letter) {
    const rect = letter.getBoundingClientRect();
    const particle = document.createElement('span');
    particle.classList.add('particle');

    // colocar no local da letra
    particle.style.left = rect.left + window.scrollX + "px";
    particle.style.top = rect.top + window.scrollY + "px";

    // deslocamento aleatório (explosão)
    const angle = Math.random() * 2 * Math.PI;
    const distance = 30 + Math.random() * 30;
    const dx = Math.cos(angle) * distance + "px";
    const dy = Math.sin(angle) * distance + "px";

    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 700);
}

typeWriter();

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Email copy functionality
const copyBtn = document.querySelector('.copy-btn');
const emailText = document.querySelector('.email-text');
const copyAlert = document.querySelector('.copy-alert');

copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(emailText.textContent);

        // Mostra o alerta
        copyAlert.classList.add('show');

        // Remove o alerta após 2 segundos
        setTimeout(() => {
            copyAlert.classList.remove('show');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});