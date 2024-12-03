window.addEventListener('load', () => {

    console.log('load doc')
    // opne/close
    let oc = document.getElementById('toggle');
    let mobileMenu = document.getElementsByClassName('mobile-menu')[0];
    let navbarLinks = document.getElementsByClassName('navbar-links')[0];
    navbarLinks.style.display = 'none';

    mobileMenu.addEventListener('click', () => {

        let src = oc.src.split('/');

        if (src[src.length - 1] == 'hamburger.svg') {
            document.documentElement.style.overflowY = 'hidden';
            navbarLinks.classList.remove('fadeout');
            navbarLinks.style.display = 'flex';
            void navbarLinks.offsetWidth;
            navbarLinks.classList.add('fadein');
            oc.src = './svg/cross.svg';
        }
        else {
            navbarLinks.classList.remove('fadein');
            void navbarLinks.offsetWidth;
            navbarLinks.classList.add('fadeout');
            oc.src = './svg/hamburger.svg';
            document.documentElement.style.overflowY = 'scroll';
            navbarLinks.addEventListener('animationend', function handleCloseMenu() {
                navbarLinks.style.display = 'none';
                navbarLinks.removeEventListener('animationend', handleCloseMenu);
            });
        }
    });

});