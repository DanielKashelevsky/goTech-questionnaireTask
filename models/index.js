const dbConfig = require('../config/database.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    //no need createdAt/updtatedAt
    define: {
        timestamps: false
    },
});

//creating DB
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Question = require('./Question.js')(sequelize, Sequelize);
db.Questionnaire = require('./Questionnaire.js')(sequelize, Sequelize);
db.Answer = require('./Answer.js')(sequelize, Sequelize);

//setting associations
db.Question.belongsToMany(db.Questionnaire, { through: 'QuestionnaireQuestion' });
db.Questionnaire.belongsToMany(db.Question, { through: 'QuestionnaireQuestion' });


module.exports = db;