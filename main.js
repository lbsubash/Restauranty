const navToggleBtn = document.querySelector('#hamburger');
const navbar = document.querySelector('#navMenu');



navToggleBtn.addEventListener('click', () => {
    navToggleBtn.classList.toggle('active');
    navbar.classList.toggle('active');
})