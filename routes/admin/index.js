var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../controllers/User.Controllers');
const { FormationQueries } = require('../../controllers/Formation.Controllers');
const { Formation, Facture } = require('../../models/relation');
const { UniverciteQuery } = require('../../controllers/Univercite.Coontrollers');
const { FactureQueries } = require('../../controllers/facture.Controllers');

const nav= {}
nav.formation= 'formation';
nav.univercite= 'univercite';
nav.users= 'users';
nav.facture= 'liste des facture'
const lienP='admin'

/* GET home page. */
router.get('/', async(req, res, next) => {
  let univercite = await UniverciteQuery.getAllUnivercite()
  console.log(univercite)
  res.render('admin/index', { page: 'admin', univercites:univercite ,lienP:lienP,  nav:nav });
});
router.get('/univercite', async(req, res, next) => {
  let univercite = await UniverciteQuery.getAllUnivercite()
  console.log(univercite)
  res.render('admin/index', { page: 'admin', univercites:univercite ,lienP:lienP,  nav:nav });
});
router.post('/', async(req,res,next)=>{
  let data = req.body
  console.log(data)
  let univercite = await  UniverciteQuery.setUnivercite(data) 
  res.redirect('/admin')
})
router.get('/delete/:id',async(req,res,next)=>{
  let data= {}
  data.id = req.params.id
 let univecite = await UniverciteQuery.removeUnivercite(data)
 res.redirect('/admin')
})

router.get('/update/:id',async(req,res,next)=>{
  let univercite = await UniverciteQuery.getAllUnivercite()
  let data = req.params.id
  let update= await UniverciteQuery.getUniverciteById(data.id)
  res.render('admin/index', { page: 'update admin',lienP:lienP ,univercites:univercite, update:update, nav:nav});
})
router.post('/update/:id',async(req,res,next)=>{
  let univercite = await UniverciteQuery.getAllUnivercite()
  let data = req.body
  data.id = req.params.id
  let univecite = await UniverciteQuery.updateUnivercite(data)
  res.redirect('/admin')
})
router.get('/detail/:id',(req,res,next)=>{
    UniverciteQuery.getUniverciteById(req.params.id)
    res.render('admin/detail')
})
// FIN ROUTER UNIVERCITE

// DEBUT ROUTE FORMATION

router.get('/formation', async(req,res,next)=>{
  let formation= await FormationQueries.getAllFormation()
  console.log(formation)
  res.render('admin/formation',{page:'formation',formations:formation ,lienP:lienP,nav:nav})
})
router.get('/formation/detail/:id',async(req,res,next)=>{
  let formation = await FormationQueries.getFormationById(id)
})
router.get('/formation/update/:id', async(req,res,next)=>{
  let data = req.body
  data.id = req.params.id
  let formations = await FormationQueries.updateFormation(data)
  res.render('formation/addFormation',{lienP:lienP,nav:nav,page: 'admin',formations:formations})
})
router.post('/formation/update/:id')
router.post('/formation/add', async(req,res,next)=>{
  
  let data= req.body
  let formation= await FormationQueries.setFormation(data)
  res.redirect('/formation/add',)
})
router.get('/formation/add', async(req,res,next)=>{
  let univercite= await UniverciteQuery.getAllUnivercite()
  res.render('admin/addFormation',{lienP:lienP,nav:nav,page: 'admin', univecites:univercite})
})
// FIN ROUTER FORMATION




// DEBUT ROUTE USER
router.get('/users',async(req,res,next)=>{
  let User= await UserQueries.getAllUser()
  res.render('admin/users',{lienP:lienP,nav:nav,Users:User,page: 'admin'})
})
// FIN



// DEBUT ROUTER FACTURE
router.get('/facture',async(req,res,next)=>{
  let facture = await FactureQueries.getAllFacture()
  res.render('admin/facture',{lienP:lienP,nav:nav,page: 'admin'})
})
// FIN

module.exports = router;
