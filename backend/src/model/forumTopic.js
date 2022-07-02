const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      riquired: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'Comments'
    },
    likes: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
