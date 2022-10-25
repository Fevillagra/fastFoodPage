const body = document.querySelector('#body');
const mainCointainer = document.querySelector('.main');
const containerImages = document.querySelectorAll('.menu__container--img');
const img = document.querySelectorAll('.menu__image');
const btnPlus = document.querySelectorAll('.menu__btn');
const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const modalCross = document.querySelector('.modal__btn');
const modalImg = document.querySelector('.modal__img');
const modalDescription = document.querySelector('.modal__description');

window.addEventListener('DOMContentLoaded', () => containerImages.forEach(element => element.style.background = '#FF6600'));

img.forEach(element => element.addEventListener('click', () => {
    element.style.opacity = '.2';
    let btn = element.nextElementSibling;
    btn.style.display = 'block';
    modalCross.addEventListener('click', () => {
        modal.style.display = 'none';
        body.style.overflow = 'visible';
        element.style.opacity = '1';
        btn.style.display = 'none';
        header.style.display = 'grid';
    });
}));

btnPlus.forEach(element => element.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';
    header.style.display = 'none';
    fetch('../data/hamburgers.json')
        .then(res => res.json())
        .then(data => data.forEach( selection => {
            if(selection.id === element.id) {
                modalImg.src = `${selection.url}`;
                modalDescription.textContent = `${selection.description}`;
            }
        }))
        .catch(error => console.log(error.message));
}));