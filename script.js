// DOM Elements
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');
const backToTopBtn = document.getElementById('backToTop');
const propertySearchForm = document.getElementById('propertySearchForm');
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const faqItems = document.querySelectorAll('.faq-item');
const propertyFavorites = document.querySelectorAll('.property-favorite');
const tags = document.querySelectorAll('.tag');
const counters = document.querySelectorAll('.counter');
const testimonialTrack = document.getElementById('testimonialTrack');
const sliderDots = document.getElementById('sliderDots');

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (nav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Back to Top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Property Search Form
propertySearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Search functionality would be implemented here. This would filter properties based on your criteria.');
});

// Contact Form Validation and Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        fullName.parentElement.classList.add('error');
        fullName.parentElement.classList.remove('success');
        isValid = false;
    } else {
        fullName.parentElement.classList.remove('error');
        fullName.parentElement.classList.add('success');
    }
    
    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.parentElement.classList.add('error');
        email.parentElement.classList.remove('success');
        isValid = false;
    } else {
        email.parentElement.classList.remove('error');
        email.parentElement.classList.add('success');
    }
    
    // Validate Phone
    const phone = document.getElementById('phone');
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(phone.value) || phone.value.trim().length < 10) {
        phone.parentElement.classList.add('error');
        phone.parentElement.classList.remove('success');
        isValid = false;
    } else {
        phone.parentElement.classList.remove('error');
        phone.parentElement.classList.add('success');
    }
    
    if (isValid) {
        // Show success modal
        successModal.classList.add('active');
        
        // Reset form
        contactForm.reset();
        document.querySelectorAll('.form-field').forEach(field => {
            field.classList.remove('success', 'error');
        });
        
        // Here you would typically send the data to your backend
        // For Google Sheets integration, you would use Google Apps Script
        console.log('Form submitted:', {
            fullName: fullName.value,
            email: email.value,
            phone: phone.value,
            propertyInterest: document.getElementById('propertyInterest').value,
            budget: document.getElementById('budget').value,
            message: document.getElementById('message').value
        });
    }
});

// Real-time validation
document.querySelectorAll('.form-field input, .form-field select, .form-field textarea').forEach(input => {
    input.addEventListener('blur', () => {
        const field = input.closest('.form-field');
        if (input.hasAttribute('required') && input.value.trim() === '') {
            field.classList.add('error');
            field.classList.remove('success');
        } else if (input.value.trim() !== '') {
            field.classList.remove('error');
            field.classList.add('success');
        }
    });
});

// Modal Close
modalClose.addEventListener('click', () => {
    successModal.classList.remove('active');
});

successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

// Load More Properties
loadMoreBtn.addEventListener('click', () => {
    alert('Load more functionality would fetch additional properties from the backend.');
});

// Property Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const propertyCards = document.querySelectorAll('.property-card');
        
        propertyCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// FAQ Accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Property Favorite Toggle
propertyFavorites.forEach(btn => {
    btn.addEventListener('click', () => {
        const icon = btn.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#e53e3e';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
        }
    });
});

// Tag Selection
tags.forEach(tag => {
    tag.addEventListener('click', () => {
        tags.forEach(t => t.classList.remove('active'));
        tag.classList.add('active');
    });
});

// Counter Animation
const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + '+';
        }
    };
    
    updateCounter();
};

// Intersection Observer for counters
const observerOptions = {
    threshold: 0.5
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Testimonial Slider
let currentSlide = 0;
const testimonialItems = document.querySelectorAll('.testimonial-item');
const totalSlides = testimonialItems.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    sliderDots.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
    currentSlide = index;
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

// Auto-play testimonials
setInterval(nextSlide, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Newsletter Form
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    e.target.reset();
});

// Exit Intent Popup (optional)
let exitIntentShown = false;
document.addEventListener('mouseout', (e) => {
    if (e.clientY < 0 && !exitIntentShown) {
        exitIntentShown = true;
        // You can show a popup here
        console.log('Exit intent detected');
    }
});

// Initialize back to top button as hidden
backToTopBtn.style.display = 'none';

console.log('Prestige Properties - Real Estate Landing Page Loaded Successfully!');