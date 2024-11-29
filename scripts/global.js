window.addEventListener('load', () => {

    // opne/close
    let oc = document.getElementById('toggle');

    document.getElementsByClassName('mobile-menu')[0].addEventListener('click', () => {

        let src = oc.src.split('/');

        if (src[src.length - 1] == 'hamburger.svg') {
            document.getElementsByClassName('navbar-links')[0].classList.remove('fadeout');
            void document.getElementsByClassName('navbar-links')[0].offsetWidth;
            document.getElementsByClassName('navbar-links')[0].classList.add('fadein');
            oc.src = './svg/cross.svg';
        }
        else {
            document.getElementsByClassName('navbar-links')[0].classList.remove('fadein');
            void document.getElementsByClassName('navbar-links')[0].offsetWidth;
            document.getElementsByClassName('navbar-links')[0].classList.add('fadeout');
            oc.src = './svg/hamburger.svg';
        }


    });

});