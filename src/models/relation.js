const Formation = require("./formation");
const Modalite = require("./modalité");
const Repartition = require("./repartition");
const User = require("./user");

User.hasMany(Formation, {foreignKey:'formation_id',as:'formation'});
Formation.belongsTo(Modalite, {foreignKey:'modalite_id',as:'modalite'});
Formation.belongsTo(Repartition, {foreignKey:'repartition_id',as:'repartition'});
Modalite.hasMany(Formation,{ foreignKey: 'formation_id', as:'formation'});
Repartition.hasMany(Formation,{ foreignKey: 'formation_id', as:'formation'});

module.exports = User
module.exports = Formation
module.exports = Modalite
module.exports = Repartition