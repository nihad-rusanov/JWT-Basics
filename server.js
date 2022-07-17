const express = require("express");
const connectDatabse = require("./db/connect");
const notFound = require("./middileware/not-found");
const app = express();
const mainRouter = require("./routes/main");

// middleware
app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(notFound);

//connect database
connectDatabse();

const port = 3000;

app.listen(port, () => {
  console.log(`port is running ${port}`);
});
