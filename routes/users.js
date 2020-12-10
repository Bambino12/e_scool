var express = require('express');
const { UserQueries } = require('../controllers/User.Controllers');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.render('user/signup');
});
router.get('/profil',(req,res)=>{
  res.render('user/profile')
})
router.post('/register', async(req,res)=>{
  console.log(req.body) 
  let data={}
  data.name= req.body.name;
  data.prenom= req.body.prenom;
  data.mail= req.body.mail;
  data.password= req.body.password;
  data.naissence_etud = req.body.naissence_etud.toString()
  console.log('par ici les data:',data)
  let users= await UserQueries.setUser(data)
  console.log('et le user est la: =====> :',users)
  res.redirect('/users/profil')
})

module.exports = router;