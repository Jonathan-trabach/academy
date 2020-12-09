// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const sheetExercises = sequelizeClient.define('sheet_exercises', {
    idExercise: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{model: 'exercise', key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{model: 'users', key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    },
    typeSheet: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  sheetExercises.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return sheetExercises;
};
