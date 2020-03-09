var mongoose = require("mongoose");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var dbdata = require("../DBConnections/dbPath");


mongoose.connect(dbdata.dbPth);
var db = mongoose.connection;
var appServices = express();
appServices.use(bodyParser.urlencoded({ extended: true }));
appServices.use(bodyParser.json());
appServices.use(cors());
var port = process.env.PORT || dbdata.port;
var router = express.Router();

const saveUSerData = require("../DBFunctions/saveUserData");
const getUserData = require("../DBFunctions/getUerData");

appServices.options("/*", function(req, res, next) {
  console.log("In Options");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization");
  next();
});

router.post("/appServices/save-user-data",function(req,res){
  saveUSerData(req,res);
});

router.get("/appServices/find-user-data",function(req,res){
  getUserData(req,res);
});

appServices.use("/", router);
appServices.listen(port);
console.log("Magic happens on port " + port);