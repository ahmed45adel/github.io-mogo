// change attributes in html tag lang and dir
// load RTL.css to override

// Create new link Element



changeLang = () => {

   let html = document.querySelector("html")
   let link = document.createElement('link');
   let language = html.getAttribute("lang");
   let head = document.getElementsByTagName('HEAD')[0]
   if (language === "en") {

      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");

      link.rel = 'stylesheet';
      link.href = './css/RTL.css';
      head.appendChild(link);
   }
   else {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
      head.removeChild(head.lastChild);

   }
   ;

}

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