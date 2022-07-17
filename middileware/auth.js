const jwt = require("jsonwebtoken");
const { unauthenticated } = require("../errors");

const authMiddileware = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders || authHeaders.startsWith("Bearer ")) {
    throw new unauthenticated("No token provided");
  }

  try {
    const token = authHeaders.split(" ")[1];

    const decode = jwt.verify(token, "secret");

    const { id, name } = decode;

    req.user = { id, name };

    next();
  } catch (err) {
    throw new unauthenticated("Not authorized to access this route");
  }
};

module.exports = authMiddileware;
