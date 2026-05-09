// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.feature-card, .hero-badge, .hero h1, .hero p, .hero-btns, .app-showcase');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            if (rect.top < viewHeight * 0.9) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Mockup Roulette Animation
    const mockups = document.querySelectorAll('.mockup');
    const positions = ['pos-far-left', 'pos-left', 'pos-main', 'pos-right', 'pos-far-right'];
    let state = [2, 1, 3, 0, 4]; // Indices for: mockup0=main, mockup1=left, mockup2=right, mockup3=far-left, mockup4=far-right

    const cycleMockups = () => {
        // Shift the state array: [2, 1, 3, 0, 4] -> [4, 2, 1, 3, 0]
        state.unshift(state.pop());

        mockups.forEach((mockup, i) => {
            positions.forEach(p => mockup.classList.remove(p));
            mockup.classList.add(positions[state[i]]);
        });
    };

    setInterval(cycleMockups, 4000);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
