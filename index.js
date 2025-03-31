const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;

const SignupModel = require("./Models/Signup.js");
const AuctionModel = require("./Models/Auction.js");
const SigninModel= require("./Models/Signin.js");

app.get("/sayhello", (req, res) => {
  res.send("Hello World to Night Class!");
});

app.post("/signup", async (req, res) => {
  try {
    const Signup1 = await SignupModel.create(req.body);
    res.status(200).json(Signup1);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/Signin", async (req, res) => {
  try {
    const Signin = await SigninModel.create(req.body);
    res.status(200).json(Signin);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post("/addauctiondata", async (req, res) => {
  try {
    const Auction1 = await AuctionModel.create(req.body);
    res.status(200).json(Auction1);
    console.log(req.body);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/getauctiondata", async (req, res) => {
  try {
    const Auction1 = await AuctionModel.find();
    res.status(200).json(Auction1);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect("mongodb+srv://Raviteja:27ravitejalingala@projectauction.2zlc8fp.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Mongo DB Not ConnecteD");
  });
