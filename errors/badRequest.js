const { StatusCodes } = require("http-status-codes");
const customError = require("./customError");

class badRequest extends customError {
  constructor(message, status) {
    super(message);
    status = StatusCodes.BAD_REQUEST;
  }
}

module.exports = badRequest;
