const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('#input_chat');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();
const btnpopwhishlist = document.querySelector("#wish-list-btn"); 
const btnwishlistclose = document.querySelector("#wish-list-close"); 
const popupwishlist = document.querySelector('.pop-up-wishlist');
const popupwish_id= document.querySelector('#janela-wish');
const input_qtd = document.getElementById("n-items");
const foto_ativa = document.getElementById("foto-wish-active")


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('#input_chat').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler

let open_wish = false;

btnpopwhishlist.addEventListener('click', ()=>{
  if (popupwish_id.classList.contains('show')){
    open_wish = false;
  }else{open_wish= true};
  popupwishlist.classList.toggle('show');
})

btnwishlistclose.addEventListener('click', ()=>{
  open_wish = false;
  popupwishlist.classList.toggle('show');

  return open_wish
})

chatBtn.addEventListener('click', ()=>{
  
  if (popupwish_id.classList.contains('show') && popup.classList.contains('show')){
    popup.classList.toggle('show');
    popupwishlist.classList.toggle('show');
  }else{
    popup.classList.toggle('show');
    if(open_wish){popupwishlist.classList.toggle('show')};
  }
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    console.log(userInput.length);

    if (userInput.length !== 0) {

      let temp = `<div class="out-msg">
      <span class="my-msg">${userInput}</span>
      <img src="./imagens/me.jpg" class="avatar">
      </div>`;

      chatArea.insertAdjacentHTML("beforeend", temp);
      inputElm.value = '';
    }else{ 
      console.log("vazio")
    }

})

//atualizar número elementos

input_qtd.defaultValue = "1";

let counter = 1

function plus_item () {
  counter = parseInt(input_qtd.value)
  counter += 1;
  input_qtd.value = counter;
  return counter 
}

function less_item () {
  counter = parseInt(input_qtd.value);
  if (counter>1){
  counter -= 1;
  input_qtd.value = counter;
  return counter 
}else{
  //pass 
}
}

//mudar foto ativa

const mini_fotos = document.querySelectorAll(".foto-wish-visao")



mini_fotos.forEach(foto =>{
  foto.addEventListener("click", function(){
    let new_source = (foto.src).toString();
    foto_ativa.src= new_source;
  })
})