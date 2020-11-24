const bcrypt =require('bcrypt');
const {Repartition} =require('../models/relation');

exports.RepartitionQueries = class{
    static setRepartition(data){
        console.log(Repartition)
        return new Promise(async(next)=>{
            const repartition = await Repartition.create({
                name: 'Test',
                prenom: 'kevin',
                mail : 'test@testmail.com',
                age: 11,
                password:'salut le boss',
                matricule:'VOLB10059401',
                numero: 56056396,
            }).then(repartition => {
                console.log(repartition)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
            });
        })
    }
    static getAllRepartition(){
        return new Promise(async(next)=>{
            const repartition = await Repartition.findAll({
               
            }).then(repartitions => {
               //traitement terminé...
            });
        })
    }
  


    static getRepartitionById(data){
        return new Promise(async(next)=>{
            const repartition= await  Repartition.findById(id, {
                include: [{model: Model.Role}]
            }).then(repartition => {
               
                console.log(repartition);
            });
        })
    }
   
    static updateRepartition(data){
        return new Promise(async(next)=>{
            const repartition =  Repartition.update(
             
        ).then(repartition => {
            
        });
        })
    }
  
}