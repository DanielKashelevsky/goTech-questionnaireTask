const express = require('express');
const app = express();
const dataBase = require('./models/index.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 5003;

dataBase.sequelize.sync().then(
    () => {
        console.log("DB CONNECTED");
    },
    (err) => console.log('db error',err)
);

const questionnaireContoller = require('./controllers/questionnaireController');

app.use('/questionnaire', questionnaireContoller);

app.use((req, res) => {
    res.status(404).json({
        message: "Path not found",
    });
});

app.listen(PORT, console.log(`This server is running on port: ${PORT}`));


