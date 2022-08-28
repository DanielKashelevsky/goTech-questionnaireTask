module.exports = (sequelize, Sequelize) => {
    const Questionnaire = sequelize.define('questionnaire', {
        
        
        questionnaireId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        questionnaireName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    });

    return Questionnaire;
};