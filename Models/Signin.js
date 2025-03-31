const mongoose = require("mongoose");

const SigninSchema = mongoose.Schema({
    RollNo: {
     type: String,
         required: true,
      },
    password: {
        type: String,
        required: true,
      }
});

const SigninModel = mongoose.model("Signin", SigninSchema);
module.exports = SigninModel;
