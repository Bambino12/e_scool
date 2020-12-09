const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');


module.exports = sequelize.define("factures",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    prix_factur:{
        allowNull:false,
        type: Sequelize.INTEGER(11),
    },
    mode_paie:{
        type:Sequelize.STRING(30),
      },
    user_id: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'commandes',
            key:'id'
        }
    },
},
{
    tableName: 'factures', timestamps: false, underscored: false
}
)