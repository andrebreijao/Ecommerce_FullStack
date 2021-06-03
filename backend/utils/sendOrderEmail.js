import nodemailer from 'nodemailer';
import google from 'googleapis';
import { gmail } from 'googleapis/build/src/apis/gmail';

const CLIENT_ID =
  '618764626040-7v0g1ahgv2kb40hahkmkn0hjn93guujh.apps.googleusercontent.com';
const CLIENT_SECRET = '8VOW-GE_SZAf2_6w28dhfLNt';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04weDaWJS-V5kCgYIARAAGAQSNwF-L9IrFhHVoUiYJHxhrHPAHJnn7br0VdWDpvlW7U4zutsjibTnPPRJXfE0xqAp8JSwB5AMopk';

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
      to: [email, 'andrebreijao@gmail.com'],
      subject: 'Teste de email',
      text: ` Olá ${nome}, seu pedido foi confirmado! Valor do pedido: ${valorPedido} ${listaItems} Obrigado! `,
      html: ` <h3>Olá ${nome}, seu pedido foi confirmado!</h3> Valor do pedido: ${valorPedido}  <br>${listaItems}<br> Obrigado! `,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
};

export default sendMail;

// sendMail()
//   .then((result) => console.log('Email enviado...', result))
//   .catch((error) => console.log(error.message));
