process.env.NODE_ENV !== "development" && require("dotenv").config()

// Express Depedecies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

mongoose.connect(process.env.DATABASE, {useMongoClient:true});
//mongoose.connect('mongodb://localhost/qna', {useMongoClient:true});
mongoose.Promise = global.Promise;

// Routes
const apiQuestions = require('./routes/api.questions');
const apiUsers = require('./routes/api.users');
const apiAuth = require("./routes/api.auth");

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser())
app.use(logger('dev')); 
app.use(cors());    

app.use('/api/questions', apiQuestions);
app.use('/api/users', apiUsers)
app.use("/auth", apiAuth)

app.get('/', function (req, res) {
  res.send('TOPPPP !');
})

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
})

module.exports = app;