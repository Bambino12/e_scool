const bcrypt =require('bcrypt');
const {Formation, User} =require('../models/relation');

exports.FormationQueries = class{
    static setFormation(data){
        return new Promise(async(next)=>{
            const formation = await Formation.create({
                intitule:"c'est sa le cour",
                teaser:'oui',
                code:'oui',
                user_id: 1
            }).then(Formation => {
                console.log(Formation)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
            });
        })
    }
    static getAllFormation(){
        return new Promise(async(next)=>{
            const formation = await Formation.findAll({
               include:[{model: 'users'}]
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