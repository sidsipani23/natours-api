const AppError = require('../utils/appError');

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    // eslint-disable-next-line no-console
    console.error('Error', err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error!'
    });
  }
};

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const keys = Object.keys(err.keyPattern);
  const values = keys.map(key => `${key}: ${err.keyValue[key]}`);
  const message = `Duplicate field value: '${values.join()}'. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const { errors } = err;
  let message = 'Invalid input data: ';
  Object.keys(errors).forEach(error => {
    message += `${errors[error].message} `;
  });
  message = message.trim();
  return new AppError(message, 400);
};

const handleJsonWebTokenError = () => {
  const message = 'Invalid token';
  return new AppError(message, 401);
};

const handleJWTTokenExpiredError = () => {
  const message = 'Expired token';
  return new AppError(message, 401);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.create(err);
    if (error.name === 'CastError') error = handleCastErrorDB(err);
    if (error.code === 11000) error = handleDuplicateFieldsDB(err);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(err);
    if (error.name === 'JsonWebTokenError') error = handleJsonWebTokenError();
    if (error.name === 'TokenExpiredError')
      error = handleJWTTokenExpiredError();
    sendErrorProd(error, res);
  }
};
