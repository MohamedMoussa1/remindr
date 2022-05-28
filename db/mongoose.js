const mongoose = require("mongoose");

/* Connect to our database */
// Get the URI of the local database, or the one specified on deployment.
const mongoURI = process.env.REMINDR_DB_URI;

mongoose.connect(mongoURI).then(() => {
  console.log("Connected to mongodb");
});

module.exports = { mongoose }; // Export the active connection.
