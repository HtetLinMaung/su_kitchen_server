module.exports = (err, req, res, next) => {
  const message = err.message;
  const data = err.data;
  const statusCode = err.statusCode || 500;
  console.log(err);
  res.status(statusCode).json({ message, data });
};
