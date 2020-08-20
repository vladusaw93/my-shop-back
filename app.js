require("dotenv").config();
const express = require("express");
const { userRouter, authRouter } = require("./routes");
const { PORT } = require("./configs");
const dataBase = require("./DataBase").getInstance();

dataBase.setModels();

const app = express();

app.use(require("morgan")("dev"));

app.use(express.json());
app.use(express.urlencoded());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`PORT ${PORT} work`);
});
