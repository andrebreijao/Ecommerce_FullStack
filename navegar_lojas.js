const botao_produto = document.getElementById("btn-produto");
const botao_loja = document.getElementById("btn-loja");
const lista_produtos = document.querySelector(".lista-produtos");
const lista_lojas = document.querySelector(".lista-lojas");



function mostar_produtos() {
    lista_lojas.style.display = "None";
    lista_produtos.style.display = "flex";
}

function mostar_lojas() {
    lista_produtos.style.display = "None";
    lista_lojas.style.display = "flex";
}
