// Initialize ScrollReveal for professional entrance
const sr = ScrollReveal({
    distance: '40px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.reveal', { interval: 100 });
sr.reveal('.hero h1', { origin: 'top' });
sr.reveal('.bento-item', { 
    interval: 150,
    scale: 0.95,
    mobile: true 
});

// Custom Cursor (Optional Aesthetic touch)
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
