document.addEventListener('click', (e) => {
    if (e.target.closest('.nav-links a')) {
        document.body.classList.remove('nav-open');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
        document.body.classList.remove('nav-open');
    }
});