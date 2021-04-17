//Middleware de resposta em caso de endereço não encontrado
const notFound = (req, res, next) => {
  const error = new Error(`Não encontrado - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  //status code: status da resposta da requisição para o backend
  // 200 (request ok), o resto será tipo 500 (erro de servidor)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    //mostra o stack do erro se não estiver em produção
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
