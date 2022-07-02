const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
	{
		userCreator: {
			type:mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		comment: {
			type: String,
			required: true,
		},
		forumTopic: {
			type:mongoose.Schema.Types.ObjectId,
			ref: 'Topic'
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;