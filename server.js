const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/User");
const admin = require ("./routes/Admin")
const appointmentRouter = require ("./routes/appointmentRouter")
const slotRouter = require ("./routes/slotRouter")
const app = express();
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;


//Routes
app.use("/register",user );
app.use("/login",user)
app.use("/auth",user )
app.use("/add", admin)
app.use("/getusers",admin)
app.use("/updatedoctor", admin)
app.use("/appointments", appointmentRouter);
app.use("/slots", slotRouter);

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port PORT`)
);