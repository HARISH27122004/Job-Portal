const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 7070;
const routes = require("./routes/portalRoute");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

app.use('/details',routes)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("successfully connected");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error("cannot connect to the db", e);
  })