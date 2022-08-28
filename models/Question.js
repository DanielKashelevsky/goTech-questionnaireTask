module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        
        questionId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    
        questionName: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        isRequired: {
            type: Sequelize.BOOLEAN

        },

        hasTextQuestion: {
            type: Sequelize.BOOLEAN
        },

        type: {
            type: Sequelize.STRING
        },

        //these option fields thats how frontend knows what type of question
        optionA: {
            type: Sequelize.STRING
        },


        optionB: {
            type: Sequelize.STRING
        },


        optionC: {
            type: Sequelize.STRING
        },


        optionText: {
            type: Sequelize.STRING
        },

        nextQuestion: {
            type: Sequelize.INTEGER,
            defaultValue: null
        },

        //this field - the answer that user have to submit to trigger next question related to the previous one
        nextQuestionTrigger: {
            type: Sequelize.STRING
        }
    });

    return Question;
}
