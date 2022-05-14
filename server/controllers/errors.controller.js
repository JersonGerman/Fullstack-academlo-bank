const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'fail';
  if (statusCode < 500) {
    res.status(statusCode).json({
      status,
      message: err.message,
      error: err,
    });
  } else {
    res.status(statusCode).json({
      status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }
};

module.exports = { globalErrorHandler };
