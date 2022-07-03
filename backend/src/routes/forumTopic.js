const express = require('express');
const router = express.Router();
const controller = require('../controller/forumTopic');


router.post('/create', controller.createTopic);
router.get('/topic/:id', controller.getTopicById);
router.get('/all', controller.getAll);

module.exports = router;