const hamburger = document.getElementById('hamburger-btn');
const menuTop = document.querySelector(".top");
const menuBottom = document.querySelector(".bottom");
const menuMiddle = document.querySelector(".middle");
const menuLine = document.querySelector(".line");
const nav = document.querySelector(".nav");


hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded');
    if (isOpen === 'false') {
        hamburger.setAttribute('aria-expanded', 'true');
        menuBottom.classList.add('active');
        menuLine.classList.add('active');
        menuMiddle.classList.add('active');
        menuTop.classList.add('active');
        nav.classList.add('active');

    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        menuBottom.classList.remove('active');
        menuLine.classList.remove('active');
        menuMiddle.classList.remove('active');
        menuTop.classList.remove('active');
        nav.classList.remove('active');
    }
})

