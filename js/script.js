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
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

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