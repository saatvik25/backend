// var express = require('express');
// var router = express.Router();
// // now acquire user model in this file
// const usermodel = require("./users")

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// // ye code asynchronous hai to ye baad mei run hoga agar hum await laga de tab ye nahi hoga lekin await ke saat sync lagana jaroori hai parent function mei
// router.get('/create', async function(req, res, next) {
//   const createuser = await usermodel.create({
//     username : "Saatvik",
//     name :"Saatvik",
//     age :21,
//   });
//   res.send("createuser")
// });

// module.exports = router;


// index.js

var express = require('express');
var router = express.Router();

// now acquire user model in this file
const usermodel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ye code asynchronous hai to ye baad mei run hoga agar hum await laga de tab ye nahi hoga lekin await ke saat sync lagana jaroori hai parent function mei
router.get('/create', async function(req, res, next) {
  const createUser = await usermodel.create({
    username: "Saatvik",
    name: "Saatvik",
    age: 21,
  });
  res.send(createUser); // Corrected this line to use the variable instead of a string
});

module.exports = router;
