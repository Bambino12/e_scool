const Formation = require("./formation");
const User = require("./user");
const Commande = require('./commandes')
const LigneCommande = require('./ligne_commandes');
const Catalogue = require('./catalogue');
const Admin = require('./admin');
const Facture = require('./facture');
const facture = require("./facture");



User.hasMany(Facture, {foreignKey:'user_id',as:'facture'});
Formation.hasMany(LigneCommande, {foreignKey:'formation_id', as: 'ligneCommandes'})
Commande.hasMany(LigneCommande, { foreignKey:'commande_id', as: 'LigneCommandes'})
Commande.belongTo(Facture, {foreignKey:'commande_id'});
Formation.belongTo(Catalogue, {foreignKey:'formation_id'})
Catalogue.hasMany(Formation, {foreignKey:'catalogue_id', as: 'formations' })
Admin.hasMany(Catalogue, {foreignKey:'admin_id', as: 'catalogues'})
Admin.hasMany(Formation, {foreignKey:'admin_id', as: 'formations'})
Facture.belongTo(User, { foreignKey: 'fature_id', as: 'user'})
Facture.belongTo(Commande, {foreignKey:'facture_id', as: 'commandes'})


exports.User = User;
exports.Formation = Formation;