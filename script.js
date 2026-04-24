// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false // Animations trigger only once
});

// Animate Hero
sr.reveal('.reveal-top', { origin: 'top' });

// Animate Bento Items with a stagger effect
sr.reveal('.reveal', { origin: 'bottom', interval: 150 });

// Log for Debugging
console.log("Portfolio Loaded: Vaun Varma Guntimadugu");
