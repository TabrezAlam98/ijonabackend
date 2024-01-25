const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dataController } = require("./routes/data.routes");

const { connection } = require("./config/db");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/data", dataController);

app.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log("Error connnecting to DB");
    console.log(err);
  }
  console.log(`listening on PORT ${process.env.Port}`);
});
