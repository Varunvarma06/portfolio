// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false // Animations happen only once
});

// Apply animations to different elements
sr.reveal('.hero-content', { delay: 300, origin: 'top' });
sr.reveal('.section h2', { delay: 200, origin: 'left' });
sr.reveal('.card', { interval: 150 });

// Add a smooth hover effect logic for the name
const nameElement = document.querySelector('.reveal-type');
nameElement.addEventListener('mouseover', () => {
    nameElement.style.color = '#00d4ff';
    nameElement.style.transition = '0.5s';
});

nameElement.addEventListener('mouseout', () => {
    nameElement.style.color = '#ffffff';
});