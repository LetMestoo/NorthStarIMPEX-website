// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.transform = 'translateY(-100%)';
    }, 4500);
});

// Custom Cursor
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 100);

    // Footer detection for white cursor
    const footer = document.querySelector('footer');
    if (footer) {
        const rect = footer.getBoundingClientRect();
        if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        ) {
            cursor.classList.add('cursor--white');
            follower.classList.add('cursor-follower--white');
        } else {
            cursor.classList.remove('cursor--white');
            follower.classList.remove('cursor-follower--white');
        }
    }
});

// Cursor effects on interactive elements
const links = document.querySelectorAll('a, button, .hamburger');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking menu items
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handlers
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = {};
        formData.forEach((value, key) => { formObject[key] = value });
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Send data using fetch API
        fetch('https://formsubmit.co/ajax/info@fissiontextiles.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
        .then(response => response.json())
        .then(data => {
            // Success message
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        })
        .catch(error => {
            // Error message
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        })
        .finally(() => {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const formObject = {};
        formData.forEach((value, key) => { formObject[key] = value });
        
        // Handle file upload
        const fileInput = document.getElementById('specFile');
        if (fileInput.files.length > 0) {
            formData.append('file', fileInput.files[0]);
        }
        
        // Show loading state
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Send data using fetch API
        fetch('https://formsubmit.co/ajax/sales@fissiontextiles.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
        .then(response => response.json())
        .then(data => {
            // Success message
            alert('Thank you for your quote request! Our team will prepare a customized quote and contact you within 24 hours.');
            quoteForm.reset();
        })
        .catch(error => {
            // Error message
            console.error('Error:', error);
            alert('There was an error sending your quote request. Please try again later.');
        })
        .finally(() => {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(newsletterForm);
        const formObject = {};
        formData.forEach((value, key) => { formObject[key] = value });
        
        // Show loading state
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        // Send data using fetch API
        fetch('https://formsubmit.co/ajax/newsletter@fissiontextiles.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formObject)
        })
        .then(response => response.json())
        .then(data => {
            // Success message
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        })
        .catch(error => {
            // Error message
            console.error('Error:', error);
            alert('There was an error with your subscription. Please try again later.');
        })
        .finally(() => {
            // Reset button state
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.section-title, .about-content, .product-card, .process-card, .cert-card');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Apply initial styles for reveal animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 