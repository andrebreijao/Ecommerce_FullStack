import nodemailer from 'nodemailer';
import google from 'googleapis';

const CLIENT_ID =
  '618764626040-knundjnqf8lbm1bedqb7bjma28aua0m7.apps.googleusercontent.com';
const CLIENT_SECRET = 'dtJ-zrG9SA9lpAJYgxRp-H91';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04GltpCSzXxCkCgYIARAAGAQSNwF-L9Ir-FPmx0VMRkh50-7qmq61v_cJZm2EjAvLuukuXiKumBeHV7_FVb4M32Av382kddM8psg';

//Generate new access token
const oAuth2Client = new google.Auth.OAuth2Client(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (nome, listaItems, email, valorPedido) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'pedidos@loby.com.br',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'Pedidos Loby <pedidos@loby.com.br>',
      to: email,
      subject: 'Teste de email',
      text: ` Olá ${nome}, seu pedido foi confirmado! Valor do pedido: ${valorPedido} ${listaItems} Obrigado! `,
      html: ` <h3>Olá ${nome}, seu pedido foi confirmado!</h3> Valor do pedido: ${valorPedido}  <br>${listaItems}<br> Obrigado! `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log('erro no e-mail de confirmação');
    return error;
  }
};

export default sendMail;

sendMail(
  'andre',
  'lista',
  ['andrebreijao@gmail.com', 'andrebreijao@hotmail.com'],
  'R$ 100,20'
)
  .then((result) => console.log('Email enviado...', result))
  .catch((error) => console.log(error.message));
