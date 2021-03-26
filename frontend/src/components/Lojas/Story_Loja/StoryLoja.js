/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
// import $ from 'jquery';

const body_element = document.getElementsByTagName('BODY')[0];
const container_story = document.getElementById('container-story');
const background_story = document.getElementById('background-story');
const videos = document.querySelectorAll('video');

// Constructor de slides
class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    // Desativa slide anterior
    this.items.forEach((item) => item.classList.remove('active'));
    // ativa o slide atual
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
    // eslint-disable-next-line no-return-assign
    this.items.forEach(() => (this.thumb.innerHTML += '<span></span>'));
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

// Inicial stories
const destaque = new SlideStories('slide');
// Mostrar e fechar stories
// Abre story na tela atual do usuário e trava a tela para scroll
function mostrar_story() {
  console.log('Mostrei slide');
  body_element.style.overflow = 'hidden';
  background_story.style.top = `${window.scrollY.toString()}px`;
  background_story.style.display = 'flex';
  container_story.style.top = `${window.scrollY.toString()}px`;
  container_story.style.display = 'block';
  console.log(window.scrollY);
}

function fechar_story() {
  console.log('fechei slide');
  body_element.style.overflow = 'visible';
  background_story.style.display = 'none';
  container_story.style.display = 'none';
}

// Fecha story se clica fora do story
background_story.addEventListener('click', () => {
  fechar_story();
  console.log('container');
});

// Passa stories quanto clica nas setas e fecha se apertar esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    // do nothing
  } else if (event.key === 'ArrowLeft') {
    console.log('left');
    destaque.prev();
  } else if (event.key === 'ArrowRight') {
    console.log('right');
    destaque.next();
  } else if (event.key === 'Escape') {
    console.log('Esc');
    fechar_story();
  }
});

// Elemento Story
function StoryLoja() {
  return (
    <div>
      <div id="background-story" />

      <div id="container-story">
        <div data-slide="slide" className="slide">
          <div className="slide-items">
            <img
              src="./Imagens/stories/img1.jpg"
              alt="Img 1"
              className="img-stories"
            />
            <img
              src="./Imagens/stories/img2.jpg"
              alt="Img 2"
              className="img-stories"
            />
            <img
              src="./Imagens/stories/img3.jpg"
              alt="Img 3"
              className="img-stories"
            />

            <video
              width="300"
              height="200"
              autoPlay
              loop
              layout="fill"
              alt="img 4"
              className="img-stories"
              id="videostories"
            >
              <source src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/previa_video_4x5.mp4" />
              <track
                src=""
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>

            <img
              src="./Imagens/stories/img4.jpg"
              alt="Img 5"
              className="img-stories"
            />
          </div>
          <div className="slide-thumb" id="barra_story" />
          <nav className="slide-nav">
            <button className="slide-prev botao-story" type="button">
              Anterior
            </button>
            <button className="slide-next botao-story" type="button">
              Próximo
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default StoryLoja;
