// install mongoose
// npm i mongoose

// require and setup connection

const mongoose = require('mongoose');
mongoose.connect("mongodb://27.0.0.1:2707//practice");
// mongoose.connect("mongodb://localhost:27017/practice");

// make schema


const userschema = mongoose.Schema({
  username : String,
  name :String,
  age :Number,

});

// create model and export
// mongoose.model(naam,schema); aur ye store userschema mei hoga ye par naam collection ka hoga jaise user,product ect

module.exports = mongoose.model("user", userschema);
