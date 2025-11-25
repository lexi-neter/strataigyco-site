document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality (inside navbar shadow DOM)
    const navEl = document.querySelector('custom-navbar');
    if (navEl && navEl.shadowRoot) {
        const mobileMenuBtn = navEl.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = navEl.shadowRoot.querySelector('.nav-links');

        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', function() {
                const currentDisplay = getComputedStyle(navLinks).display;
                navLinks.style.display = currentDisplay === 'flex' ? 'none' : 'flex';
            });
        }
    }

    // Smooth scrolling for same-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple form submission handling (first form on page)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for your interest! We will contact you soon.');
                emailInput.value = '';
            } else {
                alert('Please enter your email so we can reach out.');
            }
        });
    }
});
