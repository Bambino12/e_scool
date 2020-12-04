const Sequelize = require('sequelize');
const sequelize = require('../src/database/connection');

module.exports  = sequelize.define("payers",{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey:true   
    },
    facture_id: {
        allowNull:false,
        type: Sequelize.INTEGER(11),
        references:{
            model:'factures',
            key:'id'
        }
    },
    user_id:{
        allowNull:false,
        type:Sequelize.INTEGER(11),
        references:{
            model:'users',
            key:'id'
        }
    },
    formation_id:{
        allowNull:false,
        type:Sequelize.INTEGER(11),
        references:{
            model:'formations',
            key:'id'
        }
    }
},

{
    tableName: 'payers', timestamps: false, underscored: false
})