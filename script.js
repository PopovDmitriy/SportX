document.addEventListener('DOMContentLoaded', function() {
    function headerToggler () {
        const header = document.querySelector('js-header');
        const nav = header.querySelector('[js-nav]');

        function toggleMenu () {
            nav.classList.toggle("is-open");
        }

        toggleMenu();
    }
    headerToggler();
})