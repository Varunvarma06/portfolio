// Aesthetic Scroll Reveal Configuration
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1200,
    delay: 100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100
});

sr.reveal('.reveal');
sr.reveal('.card', { interval: 150 });

// Subtle interaction: Log a greeting for other devs
console.log("Welcome to Vaun Varma's Portfolio.");
