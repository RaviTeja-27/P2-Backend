const mongoose = require("mongoose");

const SignupSchema = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
     required: true,
  },
  DOB: {
    type: String,
     required: true,
  },
  CollegeName: {
    type: String,
     required: true,
  },
  Rollno: {
    type: String,
     required: true,
  },
});

const SignupModel = mongoose.model("Signup", SignupSchema);
module.exports = SignupModel;
