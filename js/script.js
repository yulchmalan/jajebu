const navbar = document.querySelector('.nav-scroll');

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const icon = document.querySelector('.burger-icon');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        if (nav.classList.contains('nav-active')) {
            icon.setAttribute('href', 'images/icons.svg#cross');
            icon.setAttribute('height', '48');
            icon.setAttribute('width', '48');
        } else {
            icon.setAttribute('href', 'images/icons.svg#burger');
            icon.setAttribute('height', '17');
            icon.setAttribute('width', '44');
        }
    });

    window.addEventListener('scroll', () => {
        if (navbar) { 
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });
};
navSlide();