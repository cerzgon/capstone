// dbConn.js
require("dotenv").config();
const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser: true})
// mongodb://localhost:27017
// DATABASE_URI=mongodb+srv://cerzgon:SlN068myRznXSgLe@cyberhackdb.bxmbxyv.mongodb.net/?retryWrites=true&w=majority

// mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser: true})


module.exports = () => {
	const connection = mongoose
		.connect(process.env.DATABASE_URI)
		.then((result) => console.log("Connected to database"))
		.catch((err) => console.log("could not connect to database"));
};







/*
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database: ", err.message);
    process.exit(1);
  }
};

module.exports = connection;
*/

