const bcrypt =require('bcrypt');
const {Formation} =require('../models/relation');

exports.FormationQueries = class{
    static setFormation(data){
        return new Promise(async(next)=>{
            const formation = await Formation.create({
                name: 'Test',
                prenom: 'kevin',
                mail : 'test@testmail.com',
                age: 11,
                password:'salut le boss',
                matricule:'VOLB10059401',
                numero: 56056396,
            }).then(Formation => {
                console.log(formation)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
            });
        })
    }
    static getAllFormation(){
        return new Promise(async(next)=>{
            const formation = await Formation.findAll({
               
            }).then(formations => {
               //traitement terminé...
            });
        })
    }
  


    static getFormationById(data){
        return new Promise(async(next)=>{
            const formation= await  Formation.findById(id, {
                include: [{model: Model.Role}]
            }).then(formation => {
               
                console.log(formation);
            });
        })
    }
   
    static updateFormation(data){
        return new Promise(async(next)=>{
            const formation =  Formation.update(
            
        ).then(formation => {
            
        });
        })
    }
  
}