'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Voter.hasOne(models.IsGivenVote, { as: 'isgivenvote', foreignKey: 'voter_id' });
    }
  }
  Voter.init({
    document: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    fingerprint: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voter',
  });
  return Voter;
};