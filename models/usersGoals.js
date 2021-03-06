module.exports =  function(sequelize, DataTypes) {
    var UserGoals = sequelize.define("UserGoal", {     
    }, 
    {
        freezeTableName: true
    });
   UserGoals.associate = (models) => {
        UserGoals.belongsTo(models.User, {
            foreignKey: {
              allowNull: false,
            },
          });
        UserGoals.belongsTo(models.Goals, {
            foreignKey: {
                allowNull: false,
              },
        })
        } 
        return UserGoals;
      };     