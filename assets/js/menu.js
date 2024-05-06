document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('is-active');
    });
});