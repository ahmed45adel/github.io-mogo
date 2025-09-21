hideWelcome = () => {
   let hero = document.querySelector(".hero");
   if (hero.style.display !== "none") {
      hero.style.display = "none";
   } else {
      hero.style.display = "block";
   }
}

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)