var express = require('express');
var router = express.Router();
const{ UserQueries} = require('../../controllers/User.Controllers');
const { FormationQueries } = require('../../controllers/Formation.Controllers');
const { Formation } = require('../../models/relation');
const { UniverciteQuery } = require('../../controllers/Univercite.Coontrollers');

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
router.get('/formation', async(req,res,next)=>{
  let formation= await FormationQueries.getAllFormation()
  res.render('admin/formation',{page:'formation',formations:formation ,lienP:lienP,nav:nav})
})
router.get('/formation/detail/:id',async(req,res,next)=>{
  let formation = await FormationQueries.getFormationById(id)
})
router.post('/formation/add', async(req,res,next)=>{
  let formation= await FormationQueries.setFormation(data)
})
router.get('/formation/add', async(req,res,next)=>{
  res.render('admin/addFormation')
})

router.delete('/formation/delete/:id')
router.put('/formation/update/:id')

router.get('/listeUsers')
router.get('/listeUsers/detail/:id')

router.get('/facture',async(req,res,next)=>{
  res.render('/admin/facture')
})
router.get('/listFacture/detail/:id')

module.exports = router;
