function rolar_esquerda() {
    let barra = document.getElementById("lista-categorias")
    let scroll = barra.scrollLeft - 100;
    barra.scroll(scroll, 0);

}

function rolar_direita() {
    let barra = document.getElementById("lista-categorias")
    let scroll = barra.scrollLeft + 100;
    barra.scroll(scroll, 0);  
}
