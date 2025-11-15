// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Testimonial carousel functionality
let currentTestimonial = 0;
const testimonials = [
    {
        stars: 5,
        quote: "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
        author: "Renee Wells",
        title: "Product Designer, Quotient"
    },
    {
        stars: 5,
        quote: "The platform has transformed how we manage our customer relationships. Highly recommended!",
        author: "Alex Johnson",
        title: "CEO, TechStart"
    },
    {
        stars: 5,
        quote: "Outstanding support team and intuitive interface. Makes our work so much easier.",
        author: "Sarah Chen",
        title: "Operations Manager, Layers"
    }
];

// Handle testimonial dots
const dots = document.querySelectorAll('.testimonial-dots .dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonial();
    });
});

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const quoteElement = document.querySelector('.testimonial-quote');
    const authorNameElement = document.querySelector('.author-name');
    const authorTitleElement = document.querySelector('.author-title');

    if (quoteElement) quoteElement.textContent = testimonial.quote;
    if (authorNameElement) authorNameElement.textContent = `— ${testimonial.author}`;
    if (authorTitleElement) authorTitleElement.textContent = testimonial.title;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Mobile menu toggle (for future enhancement)
function createMobileMenu() {
    const nav = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--text-dark);
        `;

        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '70px';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        });

        const navLeft = document.querySelector('.nav-left');
        navLeft.appendChild(menuToggle);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();

    // Add scroll animation to feature cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    createMobileMenu();
});

// Add hover effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });

    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
