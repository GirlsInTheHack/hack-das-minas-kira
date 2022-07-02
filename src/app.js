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


app.use('/user', user);
app.use('/forum', topics);



module.exports = app;