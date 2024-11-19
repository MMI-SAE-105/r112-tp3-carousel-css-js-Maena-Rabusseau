// *** CAROUSEL ***
// TODO
const carousel=document.querySelector(".carousel__container");
carousel.scrollLeft = 520;

const prevButton=document.querySelector('.carousel__button--prev');

 const nextButton= document.querySelector('.carousel__button--next');



// Largeur de défilement d’un item
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
  carousel.scrollLeft -= carousel.offsetWidth;
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollLeft += carousel.offsetWidth ;
  });
}