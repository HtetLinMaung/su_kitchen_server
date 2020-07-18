require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION, {}).then(() => {
  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
});
