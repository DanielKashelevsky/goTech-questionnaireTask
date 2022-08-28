module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define('answer', {

        answerId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        questionnaireId: {
            type: Sequelize.INTEGER,
        },

        questionId: {
            type: Sequelize.INTEGER,
        },

        answer: {
            type: Sequelize.STRING
        }
    });

    return Answer;
};