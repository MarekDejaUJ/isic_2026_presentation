document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll('.reveal');
    const navLinks = document.querySelectorAll('nav a');

    function reveal() {
        let windowHeight = window.innerHeight;
        let elementVisible = 150;

        reveals.forEach((element, index) => {
            let elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
                navLinks.forEach(link => link.classList.remove('active'));
                if(navLinks[index + 1]) {
                    navLinks[index + 1].classList.add('active'); 
                }
            }
        });

        // Special case for hero section
        if (window.scrollY < windowHeight / 2) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[0].classList.add('active');
        }
    }

    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load
});
