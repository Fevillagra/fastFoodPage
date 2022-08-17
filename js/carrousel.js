const carrouselCollection = [
    "./images/carrousel__hamburger.jpg", 
    "./images/carrousel__chips.jpg",
    "./images/carrousel__bar.jpg",
    "./images/carrousel__menu.jpg",
    "./images/carrousel__resto.jpg"
];

const carrouselImage = document.querySelector('#carrousel__img');

let indexImage = 0;
const switchImage = () => {
    if( indexImage < 4 ){
        indexImage++;
    } else {
        indexImage = 0;
    }
    
    carrouselImage.src = carrouselCollection[indexImage];
}

const moveImage = setInterval(switchImage, 7000);