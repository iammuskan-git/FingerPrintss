'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Voting.belongsTo(models.Candidate,    { as: 'candidate', foreignKey: 'candidate_id' });
    }
  }
  Voting.init({
    candidate_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voting',
  });
  return Voting;
};