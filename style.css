:root {
    --bg: #0f1113;
    --card: #16181a;
    --accent: #e0e0e0;
    --secondary: #666;
    --border: rgba(255, 255, 255, 0.08);
}

body {
    background: var(--bg);
    color: var(--accent);
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 2rem 5%;
    font-weight: 500;
}

.hero {
    padding: 15vh 5%;
    max-width: 800px;
}

h1 {
    font-size: clamp(3rem, 10vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -0.04em;
}

.hero p {
    font-size: 1.5rem;
    color: var(--secondary);
}

.container {
    padding: 0 5% 100px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.card {
    background: var(--card);
    padding: 2.5rem;
    border-radius: 24px;
    border: 1px solid var(--border);
    transition: all 0.5s ease;
}

.card.wide {
    grid-column: span 2;
}

.card:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
}

.tag {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--secondary);
    display: block;
    margin-bottom: 1rem;
}

.skills-list span {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border);
    border-radius: 100px;
    margin: 0.3rem;
    font-size: 0.85rem;
}

@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
    .card.wide { grid-column: span 1; }
}
