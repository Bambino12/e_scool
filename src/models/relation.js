const Formation = require("./formation");
const Modalite = require("./modalite");
const Repartition = require("./repartition");
const User = require("./user");

User.hasMany(Formation, {foreignKey:'formation_id',as:'formations'});
Formation.belongsTo(Modalite, {foreignKey:'modalite_id',as:'modalites'});
Formation.belongsTo(Repartition, {foreignKey:'repartition_id',as:'repartitions'});
Formation.hasMany(User, {foreignKey:'user_id', as: 'users'})
Modalite.hasMany(Formation,{ foreignKey: 'formation_id', as:'formations'});
Repartition.hasMany(Formation,{ foreignKey: 'formation_id', as:'formations'});

module.exports = User
module.exports = Formation
module.exports = Modalite
module.exports = Repartition