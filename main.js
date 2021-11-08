
// primo metodo

const element = document.querySelector('.header-right > a');
const hamburgher = document.querySelector('.hamburger-menu');
const menucloser = document.querySelector('header .hamburger-menu .close');

element.addEventListener("click", 
function() {
  element.remove()
  hamburgher.style.display = 'block';
});

menucloser.addEventListener("click", 
function() {
  hamburgher.style.display = 'none';
});

// secondo metodo




