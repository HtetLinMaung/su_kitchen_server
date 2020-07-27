require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const error = require("./middlewares/error");
const s3 = require("./storage");
const multer = require("multer");
const multerS3 = require("multer-s3");

const app = express();
const PORT = process.env.PORT || 5000;

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read",
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

app.use(cors());
app.use(express.json());
app.use(upload.single("image"));
app.get("/", (req, res) => {
  res.json({ message: "running successful" });
});
app.use("/api/auth/", require("./routes/AuthRoutes"));
app.use("/api/categories/", require("./routes/CategoryRoute"));
app.use("/api/menus/", require("./routes/MenuRoute"));
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
