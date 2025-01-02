const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 6000;
// require('./schedular1');
// require("./schedular2");
require("./schedular3");

const app = express();
app.use(express.json());

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
