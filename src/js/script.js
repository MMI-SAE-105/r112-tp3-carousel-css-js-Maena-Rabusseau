// *** CAROUSEL ***
// TODO
const carousel = document.querySelector(".carousel__container");
carousel.scrollLeft = 520;

const prevButton = document.querySelector('.carousel__button--prev');

const nextButton = document.querySelector('.carousel__button--next');



// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollLeft -= carousel.offsetWidth;
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollLeft += carousel.offsetWidth;
    });
}

premierItem = document.querySelector(".carousel__item");

scrollAmount = scrollAmount.clientWidth;



<div class="carousel">
    <div class="carousel__item" img src="assets/img/agenda-01.avif"></div>
    <div class="carousel__item" img src="/assets/img/agenda-02.avif"></div>
    <div class="carousel__item" img src="/assets/img/agenda-03.avif"></div>
    <div class="carousel__item" img src="/assets/img/agenda-04.avif"></div>
    <div class="carousel__item" img src="/assets/img/agenda-05.avif"></div>
</div>

