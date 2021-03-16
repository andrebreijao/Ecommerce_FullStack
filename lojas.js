function redimensionar_body() {
  let tamanho_tela = (screen.width-5).toString();
  var x = document.getElementsByTagName("BODY")[0];
  x.style.width = tamanho_tela + "px";
  console.log(tamanho_tela)
}


//cards

//botoes wish e sacola e pop up de aviso de adicao

document.querySelectorAll('.icone').forEach(item => {
    item.addEventListener('click', event => {
        if (item.classList.contains('icone-selecionado')){
          item.classList.remove('icone-selecionado');

        }else{

          item.classList.add('icone-selecionado');

          console.log("andre");
          
          if (item.classList.contains('fa-heart')){  
          alert_wish()
      }else{
        alert_sacola()
      }};
    })
  })

//popup aviso de adição a wish

let popup_aviso_wish = document.getElementById("popup-card-adicionado-whish"); 
let popup_sacola = document.getElementById("popup-card-adicionado-carrinho"); 

function alert_wish() {
  console.log("alert")
  // popup_aviso_wish.style.display="block";
  popup_aviso_wish.style.visibility="visible";
  popup_aviso_wish.style.opacity="1";

  setTimeout(function(){ 
    popup_aviso_wish.style.visibility="hidden";
    popup_aviso_wish.style.opacity="0";
    // popup_aviso_wish.style.display="none"; 
  }, 3000);
}

function alert_sacola() {

  popup_sacola.style.top= window.scrollY.toString()+"px";
  body_element.style.overflow= "hidden";
  popup_sacola.style.display="flex";
  popup_sacola.style.visibility="visible";
  popup_sacola.style.opacity="1";

  popup_sacola.addEventListener("click", ()=> {
    popup_sacola.style.display="none";
    body_element.style.overflow= "visible";
    popup_sacola.style.opacity="0";
  })
}



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



// function togglePopupStories(){
//   document.getElementById("popupstories").classList.toggle("active");
// }

