const mongoose = require("mongoose");
mongoose.Promise = global.Promise;



const db = {};
db.mongoose = mongoose;
db.url = process.env.URL;
db.person = require("./person.model");
db.corona=require("./corona.model");
db.vaccination=require("./vaccination.model");

module.exports = db;