let body_element = document.getElementsByTagName("BODY")[0];
let container_story = document.getElementById("container-story");
let background_story = document.getElementById("background-story");
// let story_area = document.querySelectorAll("body > div:not(.slide-nav)")
// var story_area = document.querySelectorAll("#container-story > div:not(.slide)");

function mostrar_story() {
  console.log("Mostrei slide");
  body_element.style.overflow= "hidden";
  background_story.style.top= window.scrollY.toString()+"px";
  background_story.style.display= "flex";
  container_story.style.top= window.scrollY.toString()+"px";
  container_story.style.display= "block";
  console.log(window.scrollY);
}

function fechar_story() {
  console.log("fechei slide");
  body_element.style.overflow= "visible";
  background_story.style.display= "none";
  container_story.style.display= "none";
}

// story_area.addEventListener("click", ()=> {
//   console.log("story");
// } );

background_story.addEventListener("click", ()=> {
  fechar_story();
  console.log("container");
} );



document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowUp') {
      console.log("up")
  }
  else if (event.key == 'ArrowLeft'){
    console.log("left");
    destaque.prev()
  }
  else if (event.key == 'ArrowRight'){
    console.log("right");
    destaque.next();
  }
  else if (event.key == 'Escape'){
    console.log("Esc");
    fechar_story();
  }
});

class SlideStories {
    constructor(id) {
      this.slide = document.querySelector(`[data-slide="${id}"]`);
      this.active = 0;
      this.init();
    }
  
    activeSlide(index) {
      this.active = index;
      //Desativa slide anterior
      this.items.forEach((item) => item.classList.remove('active'));
      //ativa o slide atual
      this.items[index].classList.add('active');
      this.thumbItems.forEach((item) => item.classList.remove('active'));
      this.thumbItems[index].classList.add('active');
      this.autoSlide();
    }
  
    prev() {
      if (this.active > 0) {
        this.activeSlide(this.active - 1);
      } else {
        this.activeSlide(this.items.length - 1);
      }
    }
  
    next() {
      if (this.active < this.items.length - 1) {
        this.activeSlide(this.active + 1);
      } else {
        this.activeSlide(0);
      }
    }
  
    addNavigation() {
      const nextBtn = this.slide.querySelector('.slide-next');
      const prevBtn = this.slide.querySelector('.slide-prev');
      nextBtn.addEventListener('click', this.next);
      prevBtn.addEventListener('click', this.prev);
    }
  
    addThumbItems() {
      this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
      this.thumbItems = Array.from(this.thumb.children);
    }
  
    autoSlide() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.next, 5000);
    }
  
    init() {
      this.next = this.next.bind(this);
      this.prev = this.prev.bind(this);
      this.items = this.slide.querySelectorAll('.slide-items > *');
      this.thumb = this.slide.querySelector('.slide-thumb');
      this.addThumbItems();
      this.activeSlide(0);
      this.addNavigation();
    }
    
}

const videos = document.querySelectorAll("video")


let destaque = new SlideStories('slide');