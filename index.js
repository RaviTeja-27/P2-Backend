const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;  // Use port from .env or default to 3000

const SignupModel = require("./Models/Signup.js");
const AuctionModel = require("./Models/Auction.js");
const SigninModel = require("./Models/Signin.js");

app.get("/sayhello", (req, res) => {
  res.send("Hello World to Night Class!");
});

app.post("/signup", async (req, res) => {
  try {
    const newUser = await SignupModel.create(req.body);
    res.status(201).json(newUser);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const newSignin = await SigninModel.create(req.body);
    res.status(201).json(newSignin);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/addauctiondata", async (req, res) => {
  try {
    const newAuction = await AuctionModel.create(req.body);
    res.status(201).json(newAuction);
    console.log(req.body);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

app.get("/getauctiondata", async (req, res) => {
  try {
    const auctions = await AuctionModel.find();
    res.status(200).json(auctions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch auction data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed", err));
