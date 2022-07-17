const jwt = require("jsonwebtoken");
const { badRequest } = require("../errors");

const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    throw new badRequest("Please provide email and password");
  }
  const id = new Date().getTime();
  const token = jwt.sign({ id, name, password }, "secret", {
    expiresIn: "1d",
  });
  res.status(200).json({
    msg: "user created",
    token,
  });
};

const dashboard = (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100);

  res.status(201).json({
    msg: `hello ${req.user.name}`,
    luckNumber: `your luckly number is ${luckNumber}`,
  });
};
module.exports = {
  login,
  dashboard,
};
