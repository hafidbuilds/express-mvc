const mongoose = require("mongoose");
const Question = require("../models/questions.models");
const User = require("../models//users.models");
const helpers = require("../helpers/index");

module.exports = {
	postAnAnswer: (req, res, next) => {
		const token = req.headers.authorization || req.body.token
    	const user = helpers.decodeToken(token)

    	if (user) {
		const newAnswer = {
			content: req.body.content,
			by: user._id
		};
		Question.update(
			{ _id: req.params.qID },
			{ $push: { answers: newAnswer } },
			function(err) {
				if (err) {
					res.send(err);
				} else {
					res.send({
						data: newAnswer
					});
				}
			}
		)	
	} else {
      res.send({ message: "User token is invalid" })
    }
 },
                                                  
	putAnAnswer: (req, res, next) => {
		// 'answers._id': req.params.aID
		// 'answers.$.content': req.body.content
		Question.update(
			{ _id: req.params.qID, 'answers._id': req.params.aID },
			{ $set: {'answers.$.content': req.body.content} }
			)
			.then(function() {
				Question.findOne({ _id: req.params.qID, 'answers._id': req.params.aID })
				.then(function(question) {
					res.send(question);
				});
			})
			.catch(err => console.error(err));
	},

	deleteAnAnswer: (req, res, next) => {
		// 'user': req.user._id
		Question.findOneAndUpdate(
			{ _id: req.params.qID, 'answers._id': req.params.aID },
			{ $pull: { answers: { _id: req.params.aID } } }
			).then(function(answer) {
			res.send(answer)
		})
	} 
}