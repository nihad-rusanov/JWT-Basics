const mongoose = require("mongoose");

const connectDatabse = () => {
  mongoose
    .connect(
      "mongodb+srv://nihat_31:nihad2003@cluster0.a84om.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then(() => console.log("Connect Database"))
    .catch(() => console.log("Something went wrong try again later"));
};

module.exports = connectDatabse;
