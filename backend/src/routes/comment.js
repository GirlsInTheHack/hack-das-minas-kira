const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

router.post('/topic/:id', controller.createComment);
router.get('/all', controller.getAll);

module.exports = router