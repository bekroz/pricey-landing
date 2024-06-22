document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Smooth scroll animation for navigation links
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Animations for feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');

    function animateCards() {
        featureCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        }  else {
            header.classList.remove('transparent');
        }
        

        animateCards(); // Run animation check on scroll
    });

    // if scroll stops return to original state 
    window.addEventListener('scroll', function() {
        clearTimeout(window._scrollTimeout);
        window._scrollTimeout = setTimeout(function() {
            const header = document.getElementById('main-header');
            header.classList.remove('transparent');
        }, 250);
    });

    animateCards(); // Initial animation check

    // Form submission handling (example)
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Replace with your form submission logic
        const formData = new FormData(this);

        // Example: Log form data to console
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        alert('Form submitted! Check console for details.'); // Replace with actual submission handling
        this.reset(); // Optional: Clear form fields after submission
    });
});
