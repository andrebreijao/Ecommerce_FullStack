const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('#input_chat');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


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

chatBtn.addEventListener('click', ()=>{
    popup.classList.toggle('show');
})

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;

    console.log(userInput.length);

    if (userInput.length =! 0) {

      let temp = `<div class="out-msg">
      <span class="my-msg">${userInput}</span>
      <img src="./imagens/me.jpg" class="avatar">
      </div>`;

      chatArea.insertAdjacentHTML("beforeend", temp);
      inputElm.value = '';
    }else{ 
      //pass
    }

})