const mongoose = require("mongoose");
const Question = require("../models/questions.models");
const User = require("../models//users.models");
const helpers = require("../helpers/index");

module.exports = {
	voteUpAQuestion: (req, res, next) => {
		// Question.findOneAndUpdate(
		// 	{ _id: req.params.qID },
		// 	{ votes: }
		// 	)
		// 	}
		// }
	},

	voteDownAQuestion: (req, res, next) => {},

	voteUpAnAnswer: (req, res, next) => {},

	voteDownAnAnswer: (req, res, next) => {}
}
