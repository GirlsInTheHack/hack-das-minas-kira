const Topic = require('../model/forumTopic');
const Comment = require('../model/comment');

const createComment = async (req, res) => {
  try {
    const currentTopic = await Topic.findById(req.params.id);
    const newComment = await Comment.create(req.body);

    currentTopic.Comment = newComment.id;
    currentTopic.save();

    res.status(201).json({ 
      message: 'Cometário criado!', 
      newComment 
    });
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
  
  
  

  
};

module.exports = {
  createComment,
};
