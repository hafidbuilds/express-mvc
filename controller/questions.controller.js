const mongoose = require("mongoose");
const Question = require("../models/questions.models");
const User = require("../models//users.models");
const helpers = require("../helpers/index");

module.exports = {
	//Question
	getAllQuestion: (req, res, next) => {
		Question.find({})
			.sort({createdAt: -1})
			.populate("by")
			.populate("answers.by")
			.then(function(questions) {
				res.send(questions);
			})
			.catch(err => console.error(err));
	},

	postAQuestion: (req, res, next) => {
		const token = req.headers.authorization || req.body.token;
		const user = helpers.decodeToken(token);
		if (user) {
			//Create a Question
			const newQuestion = new Question({
				by: user._id,
				title: req.body.title,
			});
			// Save
			newQuestion.save(function(err) {
				if (err) {
					res.send(err);
				} else {
					res.send({
						data: newQuestion
					});
				}
			});
		} else {
			res.send({ message: "User token is invalid" });
		}
	},

	getAQuestion: (req, res, next) => {
		Question.findOne({_id: req.params.qID })
			.populate("by")
			.populate("answers.by")
			.then(function(question) {
				res.send(question);
			})
			.catch(err => console.error(err));
	},

	putAQuestion: (req, res, next) => {
		Question.findByIdAndUpdate(
			{ _id: req.params.qID },
			{
				title: req.body.title,
				//topics: req.body.topics
			}
		)
			.then(function() {
				Question.findOne({ _id: req.params.qID }).then(function(question) {
					res.send(question);
				});
			})
			.catch(err => console.error(err));
	},

	deleteAQuestion: (req, res, next) => {
		const token = req.headers.authorization || req.body.token
    	const user = helpers.decodeToken(token)

    	if (user) {
		Question.findOneAndRemove({ _id: req.params.qID })
			.then(function(question) {
				res.send(question);
			})
			.catch(err => console.error(err));
	} else {
			res.send({ message: "Not authorized t delete this question" });
		}
	}
};
