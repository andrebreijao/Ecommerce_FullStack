import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: true,
  auth: {
    user: 'andre@loby.com.br',
    pass: '1960!Elon',
  },
});

transporter
  .sendMail({
    from: 'Andre Felipe <andre@loby.com.br>',
    to: 'andrebreijao@gmail.com',
    subject: 'Teste notificação por email',
    text: 'Deu certo!',
    html: '<h1>Deu certo!<h2><p>Muito bom!!!</p>',
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
