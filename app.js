const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://juttumanikanta52:TrkLsHSgqa%216xcw@dt.eexll2a.mongodb.net/studentdb?retryWrites=true&w=majority&appName=dt")
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ DB Connection Error:", err));

app.use("/", userRoutes);

app.listen(3000, () => console.log("🚀 Server running at http://localhost:3000"));