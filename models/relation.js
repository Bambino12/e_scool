const Formation = require("./formation");
const User = require("./user");
const Facture = require('./facture');
const Payer = require("./payer");

User.hasMany(Payer, {foreignKey:'user_id',as:'payers'});
Formation.hasMany(Payer, {foreignKey:'formation_id', as: 'payers'})
Facture.hasMany(Payer, {foreignKey:'facture_id', as: 'payers'})

exports.User = User;
exports.Formation = Formation;