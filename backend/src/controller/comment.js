const Topic = require("../model/forumTopic");
const Comment = require("../model/comment");

const createComment = async (req, res) => {
  try {
    const currentTopic = await Topic.findById(req.params.id);
    const newComment = await Comment.create(req.body);

    currentTopic.comments = newComment.id;
    currentTopic.save();

    return res.status(201).json({
      message: "Cometário criado!",
      newComment,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const commentRequested = await Comment.find().populate('userCreator');

    return res.status(201).json(commentRequested);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createComment,
  getAll
};
