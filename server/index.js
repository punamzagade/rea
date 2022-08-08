const express = require("express");
const app = express();

// app.get("/poo", (req, res) => {
//   res.cookie("reema", "ounam");
//   res.send("hhhh");
// });

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routs/user");
const authRoute = require("./routs/auth");

const cors = require("cors");
const cookieParser = require("cookie-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});
