var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../src/controllers/User.Controllers');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  UserQueries.setUser('salut')
  res.render('index', { title: 'Express' });
});

module.exports = router;
