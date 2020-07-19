require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const error = require("./middlewares/error");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "running successful" });
});
app.use("/api/auth/", require("./routes/AuthRoutes"));
app.use(error);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  })
  .catch((err) => console.log(err));
