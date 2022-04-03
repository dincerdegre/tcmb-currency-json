const errorHandler = (err, req, res, next) => {
  res.status(400).json({
    errorMessage: err.message,
  });
};

module.exports = errorHandler;
