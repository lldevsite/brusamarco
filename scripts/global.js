
window.addEventListener('load', () => {

    setTimeout(() => {
        // opne/close
        let oc = document.getElementById('toggle');
        let mobileMenu = document.getElementById('mobile-menu');
        let navbarLinks = document.getElementsByClassName('navbar-links')[0];

        mobileMenu.addEventListener('click', () => {


            let src = oc.src.split('/');

            if (src[src.length - 1] == 'hamburger.svg') {
                document.documentElement.style.overflowY = 'hidden';
                navbarLinks.classList.remove('fadeout');
                navbarLinks.style.display = 'flex';
                void navbarLinks.offsetWidth;
                navbarLinks.classList.add('fadein');
                oc.src = '../svg/cross.svg';
            }
            else {
                navbarLinks.classList.remove('fadein');
                void navbarLinks.offsetWidth;
                navbarLinks.classList.add('fadeout');
                oc.src = '../svg/hamburger.svg';
                document.documentElement.style.overflowY = 'scroll';
                navbarLinks.addEventListener('animationend', function handleCloseMenu() {
                    navbarLinks.style.display = 'none';
                    navbarLinks.removeEventListener('animationend', handleCloseMenu);
                });
            }
        });
    }, 100);


});