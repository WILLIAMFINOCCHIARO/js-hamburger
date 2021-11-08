
const element = document.querySelector('.header-right > a');
const hamburgher = document.querySelector('.hamburger-menu');
const menucloser = document.querySelector('header .hamburger-menu .close');

// primo metodo

// element.addEventListener("click", 
// function() {
//   hamburgher.style.display = 'block';
// });

// menucloser.addEventListener("click", 
// function() {
//   hamburgher.style.display = 'none';
// });

// secondo metodo
element.addEventListener("click", 
function() {
  document.querySelector(".header-right > a").className = ".hamburgher-menu";
});










