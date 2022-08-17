let btnBars = document.getElementById('header__btn--bars');
let btnCross = document.getElementById('header__btn--cross');
let mobileNav = document.getElementById('mobileNav');
let mainBody = document.getElementById('body');


function openMenu() {
    btnBars.style.display = 'none';
    btnCross.style.display = 'block';
    mobileNav.style.display = 'block';
}

function closeMenu() {
    btnCross.style.display = 'none';
    btnBars.style.display = 'block';
    mobileNav.style.display = 'none';
}

const fixMenu = () => {
    if(screen.width >= 1041) {
        mobileNav.style.display = 'block';
    }
}

btnBars.addEventListener('click', openMenu);
btnCross.addEventListener('click', closeMenu);
mainBody.addEventListener('DOMContentLoaded', fixMenu);

