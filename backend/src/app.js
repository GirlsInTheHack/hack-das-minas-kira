require('dotenv-safe').config();
const express = require('express');
const cors = require('cors');
const db = require('./database/mongoConfig');


const app = express();

db.connect();

app.use(cors());
app.use(express.json());


const user = require('./routes/user');
const topics = require('./routes/forumTopic');
const comments = require('./routes/comment')


app.use('/user', user);
app.use('/forum', topics);
app.use('/comments', comments)



module.exports = app;