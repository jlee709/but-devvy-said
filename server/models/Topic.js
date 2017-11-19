module.exports = function (sequelize, DataTypes) {

  const Topic = sequelize.define('Topic', {
    name : {type : DataTypes.STRING, allowNull : false}
  },
    {tableName : 'topics', timestamps : false}
  );

  Topic.associate = function (models) {
    Topic.hasMany(models.Resource, {
      foreignKey : 'resource_id',
      as : 'resource'
    });
  }

  return Topic;
}