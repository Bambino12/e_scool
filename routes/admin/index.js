var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../src/controllers/User.Controllers');
const { FormationQueries } = require('../../src/controllers/Formation.Controllers');
const { Formation } = require('../../src/models/relation');


/* GET home page. */
router.get('/', function(req, res, next) {
  // UserQueries.setUser("saut")
  // UserQueries.getAllUser()
  
  // FormationQueries.setFormation('salut')
  FormationQueries.getAllFormation()
  res.render('admin/index', { title: 'Express' });
});

module.exports = router;
