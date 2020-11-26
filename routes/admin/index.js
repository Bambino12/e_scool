var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../controllers/User.Controllers');
const { FormationQueries } = require('../../controllers/Formation.Controllers');
const { Formation } = require('../../models/relation');


/* GET home page. */
router.get('/', function(req, res, next) {
  // UserQueries.setUser("saut")
  // UserQueries.getAllUser()
  
  // FormationQueries.setFormation('salut')
  FormationQueries.getAllFormation()
  res.render('admin/index', { title: 'Express' });
});

module.exports = router;
