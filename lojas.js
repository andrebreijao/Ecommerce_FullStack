

function redimensionar_body() {
  let tamanho_tela = (screen.width-5).toString();
  var x = document.getElementsByTagName("BODY")[0];
  x.style.width = tamanho_tela + "px";
  console.log(tamanho_tela)
}

document.querySelectorAll('.card-wishlist-vazio').forEach(item => {
    item.addEventListener('click', event => {
        console.log("vazio")
        item.className = 'card-wishlist-solido';
    })
  })

document.querySelectorAll('.card-wishlist-solido').forEach(item => {
item.addEventListener('click', event => {
    console.log("solido")
    item.className = 'card-wishlist-vazio';
}), { once : false}
})

// document.querySelectorAll('.card-produto').forEach(item => {
// item.addEventListener('mouseover', event => {
//     item.style.backgroundImage = "url('./Imagens/vitrine\ -\ 1.jpg')";
// }), { once : false}
// })


$(document).ready(function(){
    $("#genero").click(function(){
      $("#panel-genero").slideToggle("fast");
    });
  });

// secao carosel


// Nao automático

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(my_timer);
  my_timer = setInterval(proxslide, 3000);
}

function proxslide() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM completamente carregado e analisado");
  my_timer= setInterval(proxslide, 3000);

});


// Automático

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }




console.log("kkkkkk")
const cards = document.querySelectorAll(".img-lista-produto")

cards.forEach(card =>{
    card.addEventListener("mouseover", function(){
      this.src= card.dataset.src2;
    })
    card.addEventListener("mouseout", function(){
      this.src= card.dataset.src1;
    })
})