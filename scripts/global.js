window.addEventListener('load', () => {

    // opne/close
    let oc = document.getElementById('toggle');

    document.getElementsByClassName('mobile-menu')[0].addEventListener('click', () => {

        let src = oc.src.split('/');

        if (src[src.length - 1] == 'hamburger.svg') {
            document.getElementsByClassName('navbar-links')[0].style.display = 'flex';
            oc.src = './svg/cross.svg';
        }
        else {
            document.getElementsByClassName('navbar-links')[0].style.display = 'none';
            oc.src = './svg/hamburger.svg';
        }


    });

});