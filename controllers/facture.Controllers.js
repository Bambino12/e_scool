const bcrypt =require('bcrypt');
const {Facture} =require('../models/relation');

exports.FactureQueries = class{
    static setFacture(data){
        return new Promise(async(next)=>{
            const facture = await Facture.create({

            }).then(fa => {
                next(facture)
            }).catch(function (e) {
                next(e)
            });
        })
    }
    static getAllFacture(){
        return new Promise(async(next)=>{
            const user = await Facture.findAll({
               where:{id:1},
               include:[{model: 'formations'}]
            }).then(facture => {
               console.log(facture)
               next(facture)
            }).catch((e)=>{
                console.log('voici erreur la:',e)
                next(e)
            });
        })
    }
  
    static getFactureById(data){
        return new Promise(async(next)=>{
            const user= await  Facture.findById(id, {
                include: [{model: Model.Role}]
            }).then(user => {
                console.log(user.role.name);
                next(facture)
            }).catch(e=>{
                next(e)
            });
        })
    }
   
    static updateFacture(data){
        return new Promise(async(next)=>{
            const user =  Facture.update(
                {where: {id: id}}
        ).then(user => {
            next(e)
        });
        })
    }
  
}