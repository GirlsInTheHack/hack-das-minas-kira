const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

router.post('/comment/:id', controller.createComment);