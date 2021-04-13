import React from 'react';
import logovertical from '../../Imagens/WebyLogo/Simbolo/PNG/simbolo_white_RGB.png';

function bannerWeby() {
  function viewshoppings() {
    document.getElementById('linha-cta').scrollIntoView();
  }

  return (
    <>
      <div
        className="cta-weby"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}Imagens/background-image.jpg`})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="cta-content">
          <img src={logovertical} alt="Weby" id="logo-cta" />
          <h1>O Shopping mais perto de você.</h1>
          <p>Fique a vontade para passear e ver as lojas disponíveis.</p>
          <div className="cta-content-search">
            <button
              onClick={viewshoppings}
              className="btn-medium"
              type="button"
            >
              Entre nos shoppings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default bannerWeby;
