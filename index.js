const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/user");

mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => console.log("DB Connection Successfull!"))
	.catch((err) => {
		console.log(err);
	});

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running");
});
