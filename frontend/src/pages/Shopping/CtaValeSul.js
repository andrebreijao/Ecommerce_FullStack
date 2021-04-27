import React from 'react';

function CtaValeSul() {
  const entrarShopp = () => {
    document.getElementById('linha-cta').scrollIntoView();
  };
  return (
    <>
      <div
        className="cta"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/Imagens/Shoppings/São_José_dos_Campos/CenterVale/CTAcentevale2-855070.jpg`}) `,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="cta-content">
          <img
            id="logo-cta"
            src="../../Imagens/Shoppings/São_José_dos_Campos/CenterVale/Logo 1x1.jpg"
            alt="logo"
          />
          <h1 id="shopping">Bem vindo ao CenterVale.</h1>
          <p id="susbtitulo-shop">
            Aliamos tradição e vanguarda, inovando sempre para criar vínculo com
            os frequentadores.
          </p>
          <div className="cta-content-search bck-preto">
            <button onClick={entrarShopp} className="btn-medium" type="button">
              Entrar no shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaValeSul;
