import React from 'react'
import './Card.css'

function Card() {
    return (
        <div>
            <div class="card-produto-grid">
                    <img class="produto-grid-img" src="./Imagens/Lojas/São_José_dos_Campos/Vale_Sul/Clothe_Fashion/Produtos/hrg-1.webp" alt="produto"/>
                    <div class="card-grid-nome-produto">Shorts Masculino Em Sarja</div>
                    <div class="card-grid-precos">
                        <div class="card-grid-preco-antigo">R$119,99</div>
                        <div class="card-grid-preco-atual">R$59,99</div>
                        <div class="card-grid-preco-parcela">ou 2x de R$34,99</div>
                    </div>
            </div>
        </div>
    )
}

export default Card
