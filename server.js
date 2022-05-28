const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// dot env setup
const dotenv = require("dotenv");
dotenv.config();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");

// routes
const user = require("./routes/UserRoutes");
const patient = require("./routes/PatientRoutes");
const reminder = require("./routes/ReminderRoutes");

app.use("/api/v1/user/", user);
app.use("/api/v1/patient/", patient);
app.use("/api/v1/reminder/", reminder);

app.use(express.static(path.join(__dirname, "/client/build")));
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
