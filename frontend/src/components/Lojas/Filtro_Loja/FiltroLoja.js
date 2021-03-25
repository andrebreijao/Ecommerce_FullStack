/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import './filtroloja.css';
// const MostrarStory = () => {
// nothing
// };

function FiltroLoja() {
  return (
      <div>
        <div class="nav-filtros">

          <div class="nav-filtros-conteudo">

            <div class="nav-filtro-conteudo-flex-container">

                  <div class="campo-busca">
                      <img src="./Imagens/Logo-Loja-FIcticia.jpg" alt="" id="nav-filtros-logo-loja"/>
                      <div class="instagram-copy-kkk">
                          <div class="stories" id="ao-vivo-animation" onclick="mostrar_story()">Live</div>
                          <div class="liga-desliga">
                              <input type="checkbox" class="liga-desliga-checkbox" id="liga-desliga"/>
                              <label for="liga-desliga" class="liga-desliga-texto" data-checked="Seguindo" data-unchecked="Seguir"></label>
                          </div>
                      </div>
                      
                      <div class="container-input" id="container-busca">
                          <div class="campo-busca-input">
                              <input type="text" placeholder="Pesquisar"  id="campo-busca-input-text"/>
                              <button id="campo-de-busca-botao"><i class="fa fa-search"></i></button>
                          </div>
                          <div class="linha-personalizavel" id="linha-primaria"></div>
                      </div>

                      <div class="container-input" id="container-genero">
                          <div class="filtro-toggle" >
                              <button class="genero" id="gen" value="masculino" >Masculino</button>
                              <button class="genero" id="gen" value="feminino" >Feminino</button>
                              <button class="genero" id="kids" value="kids" >Kids</button>
                          </div>
                      </div>


                      <div class="lista-toggle-filtro">
                          <div class="filtro-toggle" id="cat_1" data-aba="cat_1_toogle">
                              <div class="filtro-toggle-texto">Categoria</div>
                              <div class="filtro-toggle-imagem"><img src="./Imagens/seta-baixo.svg" alt=""/></div>    
                          </div>
                          <div class="linha-personalizavel-toggle" id="linha-primaria"></div>
                          
                          <div class="filtro-toggle-opcoes" id="cat_1_toogle">

                          
                              <input type="checkbox" id="bermudas" name="bermudas" value="Bike"/>
                              <label for="bermudas"> Bermudas</label><br/>

                              <input type="checkbox" id="calca" name="calca" value="Bike"/>
                              <label for="calca"> Calças </label><br/>

                              <input type="checkbox" id="camisetas" name="camisetas" value="Bike"/>
                              <label for="Camisetas"> Camisetas</label><br/>

                              <input type="checkbox" id="regatas" name="regatas" value="Bike"/>
                              <label for="regatas"> Regatas</label><br/>
                          </div>
                          
                          <div class="filtro-toggle" id="cat_2" data-aba="cat_2_toogle">
                              <div class="filtro-toggle-texto">Tamanho</div>
                              <div class="filtro-toggle-imagem"><img src="./Imagens/seta-baixo.svg" alt=""/></div>
                          </div>
                          <div class="linha-personalizavel-toggle" id="linha-secundaria"></div>

                          <div class="filtro-toggle-opcoes" id="cat_2_toogle" >
                                                      
                              <input type="checkbox" id="p" name="p" value="Bike"/>
                              <label for="p">P</label><br/>
                                                      
                              <input type="checkbox" id="m" name="m" value="Bike"/>
                              <label for="m">M</label><br/>
                                                      
                              <input type="checkbox" id="g" name="g" value="Bike"/>
                              <label for="g"> G</label><br/>

                          </div>
                          
                          <div class="filtro-toggle" id="cat_3" data-aba="cat_3_toogle">
                              <div class="filtro-toggle-texto">Faixa de preço</div>
                              <div class="filtro-toggle-imagem"><img src="./Imagens/seta-baixo.svg" alt=""/></div>
                          </div>
                          <div class="linha-personalizavel-toggle" id="linha-terciaria"></div>

                          <div class="filtro-toggle-opcoes" id="cat_3_toogle">
                                                                              
                              <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike"/>
                              <label for="faixa-1">R$0-R$19,99</label><br/>
                                                                              
                              <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike"/>
                              <label for="faixa-1">R$20-R$49,99</label><br/>
                                                                              
                              <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike"/>
                              <label for="faixa-1">R$50-R$99,99</label><br/>
                                                                              
                              <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike"/>
                              <label for="faixa-1">R$100-R$199,99</label><br/>
                                                                              
                              <input type="checkbox" id="faixa-1" name="faixa-1" value="Bike"/>
                              <label for="faixa-1">R$200-R$299,99</label><br/>

                          </div>
                  
          
                  </div>
                </div>
          </div>
        </div>
      </div>
  );
}

export default FiltroLoja;
