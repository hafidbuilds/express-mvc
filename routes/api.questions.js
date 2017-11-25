const express = require('express');
const router = express.Router();
const Questions = require('../controller/questions.controller')
const Answers = require('../controller/answers.controller') 
const Votes = require('../controller/votes.controller')

//---------------------- QUESTIONS --------------------------//

router.get("/", Questions.getAllQuestion)
router.post("/", Questions.postAQuestion)
router.get("/:qID", Questions.getAQuestion)
router.put("/:qID", Questions.putAQuestion)
router.delete("/:qID", Questions.deleteAQuestion)

//-------------------------- ANSWERS ---------------------------//

router.post('/:qID/answers', Answers.postAnAnswer)
router.put('/:qID/answers/:aID', Answers.putAnAnswer)
router.delete('/:qID/answers/:aID', Answers.deleteAnAnswer)

//-------------------------- QUESTION & ANSWER VOTE ---------------------------------//

// router.post('/:qID/voteup', Questions.voteUpAQuestion)
// router.post('/:qID/votedown', Questions.voteDownAQuestion)

// router.post('/:qID/answers/:aID/voteup', Questions.voteUpAnAnswer)
// router.post('/:qID/answers/:aID/votedown', Questions.voteDownAnAnswer)

module.exports = router;