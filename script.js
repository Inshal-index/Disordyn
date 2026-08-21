const navBar = document.querySelector('.nav-bar');
let revealTimer;

if (navBar) {
    window.addEventListener('scroll', () => {
        clearTimeout(revealTimer);

        if (window.scrollY <= 45) {
            navBar.classList.remove('scrolled');
            return;
        }

        if (!navBar.classList.contains('scrolled')) {
            revealTimer = setTimeout(() => {
                navBar.classList.add('scrolled');
            }, 500);
        }
    }, { passive: true });
}
