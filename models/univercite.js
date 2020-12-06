const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("univercites",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    nom:{
        allowNull: false,
        type: Sequelize.STRING(30)
    },

},
{
    tableName: 'univercites', timestamps: false, underscored: false
}
)