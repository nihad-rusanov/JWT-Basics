const { StatusCodes } = require("http-status-codes");
const { customError } = require("../errors");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.StatusCode).json({
      msg: err.message,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: "Something went wrong try again later",
  });
};

module.exports = errorHandler;
