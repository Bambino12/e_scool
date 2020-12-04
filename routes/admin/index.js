var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../controllers/User.Controllers');
const { FormationQueries } = require('../../controllers/Formation.Controllers');
const { Formation } = require('../../models/relation');


/* GET home page. */
router.get('/', async(req, res, next) => {
  let formation= await FormationQueries.getAllFormation()
  console.log('liste des formation', formation)
  res.render('admin/index', { page: 'admin',formations:formation });
});

module.exports = router;
