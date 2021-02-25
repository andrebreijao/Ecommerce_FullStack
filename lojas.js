document.querySelectorAll('.card-wishlist-vazio').forEach(item => {
    item.addEventListener('click', event => {
        console.log("vazio")
        item.classList.remove('card-wishlist-vazio');
      item.classList.add('card-wishlist-solido');
    })
  })

document.querySelectorAll('.card-wishlist-solido').forEach(item => {
item.addEventListener('click', event => {
    console.log("solido")
    item.classList.remove('card-wishlist-solido');
    item.classList.add('card-wishlist-vazio');
})
})

// function adicionar_remover_wishlist(){
//     console.log(this.innerHTML)
// }