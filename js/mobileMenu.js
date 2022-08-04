let btnBars = document.getElementById('header__btn--bars');
let btnCross = document.getElementById('header__btn--cross');
let mobileNav = document.getElementById('mobileNav');


const openMenu = () => {
    btnBars.style.display = 'none';
    btnCross.style.display = 'block';
    mobileNav.style.display = 'block';
    console.log('BOTON OPEN');
}

const closeMenu = () => {
    btnCross.style.display = 'none';
    btnBars.style.display = 'block';
    mobileNav.style.display = 'none';
    console.log('BOTON CLOSE');
}

btnBars.addEventListener('click', openMenu);
btnCross.addEventListener('click', closeMenu);