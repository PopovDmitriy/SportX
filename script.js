document.addEventListener('DOMContentLoaded', function() {
    function headerToggler() {
        const header = document.querySelector('.js-header');
        const nav = header.querySelector('[data-nav]');
        const html = document.documentElement;

        const menuBtn = header.querySelector('[data-toggler]');

        function toggleMenu() {
            nav.classList.toggle("is-open");
        }

        menuBtn.addEventListener('click', function() {
            toggleMenu();
            noScroll();
        });

        function noScroll() {
            html.classList.toggle('no-scroll');
        }
    }
    headerToggler();
})