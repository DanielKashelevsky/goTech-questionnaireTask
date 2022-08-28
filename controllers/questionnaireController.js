const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Questionnaire = db.Questionnaire;
const Question = db.Question;
const Answer = db.Answer;

//first endpoint to get a questionnaire
router.get('/:id', (req, res) => {
    Questionnaire.findByPk(req.params.id,
        { include: { model: Question } }).then((questionnaire) => {
            res.send(questionnaire);
        }).catch((err) => console.log(err));
});

//second endpoint to submit all answered questions
router.post('/submit', (req, res) => {
    const answer = req.body;
    Answer.bulkCreate(answer).then((answer) => {
        res.send(answer)
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err)
    });
});

module.exports = router;
