function rolar_esquerda() {
    let barra = document.getElementById("lista-categorias")
    let scroll = barra.scrollLeft - 100;
    barra.scroll(scroll, 0);
    console.log(barra.scrollLeft);

}

function rolar_direita() {
    let barra = document.getElementById("lista-categorias")
    let scroll = barra.scrollLeft + 100;
    barra.scroll(scroll, 0);
    console.log(barra.scrollLeft);
    console.log(barra.offsetWidth - barra.clientWidth);
    console.log(barra.clientWidth);
}
