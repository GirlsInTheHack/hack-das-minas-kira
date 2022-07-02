const Topic = require("../model/forumTopic");

const createTopic = async (req, res) => {
  try {
    const body = req.body;

    const topic = await Topic.create(body);

    return res.status(201).json({
      message: "Topic created",
      topic
    });
  } catch (err) {
    return res.status(500).json({ message: error.message });
  }
};

const getTopicById = async (req, res) => {
  try {
    const topicRequested = await Topic.findById(req.params.id).populate('comments');

    if (!getTopicById) {
      return res.sendStatus(401);
    }

    return res.status(200).json(userRequired)
  } catch (err) {
    return res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createTopic,
  getTopicById
}