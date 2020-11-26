const Formation = require("./formation");
const Modalite = require("./modalite");
const Repartition = require("./repartition");
const User = require("./user");

User.hasMany(Formation, {foreignKey:'user_id',as:'formations'});
Formation.belongsTo(Modalite, {foreignKey:'formation_id',as:'modalites'});
Formation.belongsTo(Repartition, {foreignKey:'formation_id',as:'repartitions'});
Formation.hasMany(User, {foreignKey:'formation_id', as: 'users'})
Modalite.hasMany(Formation,{ foreignKey: 'modalite_id', as:'formations'});
Repartition.hasMany(Formation,{ foreignKey: 'repartition_id', as:'formations'});

exports.User = User;
exports.Formation = Formation
exports.Modalite = Modalite
exports.Repartition = Repartition