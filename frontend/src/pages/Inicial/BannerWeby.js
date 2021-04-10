import React from 'react';

function bannerWeby() {
  function viewshoppings() {
    document.getElementById('linha-cta').scrollIntoView();
  }

  return (
    <>
      <div
        className="cta"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}Imagens/background-image.jpg`})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="cta-content">
          <div id="logo-cta">Logo</div>
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
