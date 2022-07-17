const { StatusCodes } = require("http-status-codes");
const customError = require("./customError");

class unauthenticated extends customError {
  constructor(message, status) {
    super(message);
    status = StatusCodes.UNAUTHORIZED;
  }
}
module.exports = unauthenticated;
