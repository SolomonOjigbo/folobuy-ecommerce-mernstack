const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		isAdmin: { type: boolean, default: false },
		img: { type: String },
	},

	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
