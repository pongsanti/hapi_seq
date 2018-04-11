module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  });
}
