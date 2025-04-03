module.exports = (status, message) => {
  const error = new Error(message.Error);
  error.status = status;
  return error;
};
