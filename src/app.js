require("dotenv").config();
const express = require("express");
const router = require("../src/router/authRoute");
const app = express();
const PORT = process.env.PORT || 8080;
app.use("api/", router);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
