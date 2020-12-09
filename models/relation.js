const Formation = require("./formation");
const User = require("./user");
const Facture = require('./facture');
const Commandes = require("./commandes");
const Univercite = require("./univercite");


User.hasMany(Facture, {foreignKey:'user_id',as:'facture'});
Formation.belongsToMany(Facture, {foreignKey:'formation_id',through:Commandes});
Facture.belongsToMany(Formation, {foreignKey:'facture_id',through:Commandes});
Facture.belongsTo(User,{as:'users', foreignKey:'user_id'})
Univercite.hasMany(Formation,{foreignKey:'univercite_id',as:'formations'})

exports.Facture= Facture;
exports.User = User;
exports.Formation = Formation;
exports.Univercite = Univercite