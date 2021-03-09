module.exports =  function(sequelize, DataTypes) {
    var UserGoals = sequelize.define("UserGoal", {     
     frequency: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    }, 
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