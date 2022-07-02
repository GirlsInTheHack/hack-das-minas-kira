const mongoose = require('mongoose');

const user = new mongoose.Schema({
	id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		select: false
	}
}, { timestamps: true });

const User = mongoose.model('User', user);

module.exports = User;