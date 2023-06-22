'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Candidate.belongsTo(models.Party, { as: 'party', foreignKey: 'party_id'});
      Candidate.hasOne(models.Voting, { as: 'voting', foreignKey: 'candidate_id'});
    }
  }
  Candidate.init({
    document: DataTypes.STRING,
    fingerprint: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING,
    gender: DataTypes.STRING,
    party_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Candidate',
  });
  return Candidate;
};