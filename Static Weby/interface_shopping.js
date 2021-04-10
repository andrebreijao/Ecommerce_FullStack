const videos = document.querySelectorAll("video")

videos.forEach(video =>{
    video.addEventListener("mouseover", function(){
        this.play();
    })
    video.addEventListener("mouseout", function(){
        this.src = this.src;
    })
})


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
