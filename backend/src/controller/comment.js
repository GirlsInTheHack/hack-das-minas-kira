const Topic = require('../model/forumTopic');
const Comment = require('../model/comment');

const createComment = async (req, res) => {
  const currentTopic = await Topic.findById(req.params.id).catch((error) =>
    res.status(404).json({ error: error.message })
  );

  const newComment = await Comment.create(req.body).catch((error) =>
    res.status(400).json({ error: error.message })
  );

  currentTopic.Comment = newComment.id;
  currentTopic.save();

  return res.status(201).json({ message: 'New comment created', newComment });
};

module.exports = {
  createComment,
};
