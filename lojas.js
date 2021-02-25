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




$(document).ready(function(){
    $("#genero").click(function(){
      $("#panel-genero").slideToggle("fast");
    });
  });