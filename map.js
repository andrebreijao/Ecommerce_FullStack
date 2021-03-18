let produtos= JSON.parse(produtos_json)
let arr = [];

produtos_json.map((produto,i)=>{
    let new_div = 
                (<div class="card-produto-grid">
                    <div class="botoes-card-grid">
                        <i class="fas fa-heart icone"></i>
                        <i class="fas fa-shopping-bag icone segundo-icone"></i>
                    </div>
                    <img class="produto-grid-img" src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/hrg-1.webp" alt="produto">
                    <div class="card-grid-nome-produto">Shorts Masculino Em Sarja</div>
                    <div class="card-grid-precos">
                        <div class="card-grid-preco-antigo">R$119,99</div>
                        <div class="card-grid-preco-atual">R$59,99</div>
                        <div class="card-grid-preco-parcela">ou 2x de R$34,99</div>
                    </div>
                </div>).toString()
    ;
    arr.push(produto);
    return arr
})


let produtos_json = [
    {
      "titulo": "Shorts Masculino Em Sarja - Azul",
      "genero": "Masculino",
      "categoria": "bermuda",
      "faixa preco": "R$50-R$99,99",
      "tamanho": "M",
      "img": "hrg-1",
      "preco": "R$59,99",
      "parcelado": "2x R$29,99",
      "id": 1
    },
    {
      "titulo": "Regata Feminina Alças Largas Hering + Verena Smit - Preto",
      "genero": "feminino",
      "categoria": "regata",
      "faixa preco": "R$50-R$99,99",
      "tamanho": "M",
      "img": "hrg-2",
      "preco": "R$79,99",
      "parcelado": "2x R$39,99",
      "id": 2
    },
    {
      "titulo": "Bermuda Feminina Ciclista Em Sarja - Bege",
      "genero": "feminino",
      "categoria": "bermuda",
      "faixa preco": "R$100-R$199,99",
      "tamanho": "P",
      "img": "hrg-3",
      "preco": "R$119,99",
      "parcelado": "3x R$39,99",
      "id": 3
    },
    {
      "titulo": "Calça Feminina Jeans Cigarrete Soft Touch - Azul",
      "genero": "feminino",
      "categoria": "calça",
      "faixa preco": "R$100-R$199,99",
      "tamanho": "M",
      "img": "hrg-4",
      "preco": "R$159,99",
      "parcelado": "5x R$31,99",
      "id": 4
    },
    {
      "titulo": "Blusa Feminina Gola Alta Manga Longa Com Elastano - Marrom",
      "genero": "feminino",
      "categoria": "camiseta",
      "faixa preco": "R$50-R$99,99",
      "tamanho": "G",
      "img": "hrg-5",
      "preco": "R$89,99",
      "parcelado": "2x R$44,99",
      "id": 5
    },
    {
      "titulo": "Calça Masculina Tapper Chino Em Sarja - Cinza",
      "genero": "Masculino",
      "categoria": "calça",
      "faixa preco": "R$100-R$199,99",
      "tamanho": "M",
      "img": "hrg-6",
      "preco": "R$179,99",
      "parcelado": "5x R$35,99",
      "id": 6
    },
    {
      "titulo": "Calça Menino Em Tecido Slim Chino - Azul",
      "genero": "Kids",
      "categoria": "calça",
      "faixa preco": "R$50-R$99,99",
      "tamanho": "M",
      "img": "hrg-7",
      "preco": "R$79,99",
      "parcelado": "2x R$39,99",
      "id": 7
    },
    {
      "titulo": "Camiseta Infantil Menino Snoopy Com Estampa - Verde",
      "genero": "Kids",
      "categoria": "camiseta",
      "faixa preco": "R$20-R$49,99",
      "tamanho": "P",
      "img": "hrg-8",
      "preco": "R$39,99",
      "parcelado": "2x R$19,99",
      "id": 8
    }
   ]