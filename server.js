const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const patient = require("./routes/patient");
const admin = require ("./routes/Admin")
const app = express();
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;


//Routes
app.use("/register",patient );
app.use("/login",patient)
app.use("/auth",patient )
app.use("/user",user);
app.use("/add", admin)
app.use("/getusers",admin)

app.use("/updatedoctor", admin)

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port PORT`)
);