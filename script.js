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

    // function footerDropDown() {
    //     const footer = document.querySelector('.js-footer');
    //     const btn = footer.querySelector('[data-dropbtn]');
    //     const list = footer.querySelector('[data-droplist]');

    //     function checkStyle() {
    //         if (list.style.display == 'none') {
    //             list.style.display = 'block';
    //             console.log('hello1');
    //         } else if (list.style.display == 'block') {
    //             list.style.display = 'none';
    //             console.log('hello2');
    //         } else {
    //             console.log('bie'); 
    //         }
    //     }

    //     btn.addEventListener('click', function(){
    //         checkStyle();
    //     })
    // }
    // footerDropDown();
})