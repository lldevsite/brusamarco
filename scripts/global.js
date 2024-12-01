window.addEventListener('load', () => {

    // opne/close
    let oc = document.getElementById('toggle');

    document.getElementsByClassName('mobile-menu')[0].addEventListener('click', () => {

        let src = oc.src.split('/');

        if (src[src.length - 1] == 'hamburger.svg') {
            document.documentElement.style.overflowY = 'hidden';
            document.getElementsByClassName('navbar-links')[0].classList.remove('fadeout');
            document.getElementsByClassName('navbar-links')[0].style.display = 'flex';
            void document.getElementsByClassName('navbar-links')[0].offsetWidth;
            document.getElementsByClassName('navbar-links')[0].classList.add('fadein');
            oc.src = './svg/cross.svg';
        }
        else {
            document.getElementsByClassName('navbar-links')[0].classList.remove('fadein');
            void document.getElementsByClassName('navbar-links')[0].offsetWidth;
            document.getElementsByClassName('navbar-links')[0].classList.add('fadeout');
            oc.src = './svg/hamburger.svg';
            document.documentElement.style.overflowY = 'scroll';
            document.getElementsByClassName('navbar-links')[0].addEventListener('animationend', function handleCloseMenu () {
                document.getElementsByClassName('navbar-links')[0].style.display = 'none';
                document.getElementsByClassName('navbar-links')[0].removeEventListener('animationend', handleCloseMenu);
            });
        }


    });

});