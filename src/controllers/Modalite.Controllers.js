const bcrypt =require('bcrypt');
const {Modalite} =require('../models/relation');

exports.ModaliteQueries = class{
    static setModalite(data){
        console.log(modalite)
        return new Promise(async(next)=>{
            const modalite = await Modalite.create({
                name: 'Test',
                prenom: 'kevin',
                mail : 'test@testmail.com',
                age: 11,
                password:'salut le boss',
                matricule:'VOLB10059401',
                numero: 56056396,
            }).then(modalite => {
                console.log(modalite)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
            });
        })
    }
    static getAllModalite(){
        return new Promise(async(next)=>{
            const modalite = await Modalite.findAll({
               
            }).then(modalite => {
               //traitement terminé...
            });
        })
    }
  


    static getModaliteById(data){
        return new Promise(async(next)=>{
            const modalite= await  Modalite.findById(id, {
                include: [{model: Model.Role}]
            }).then(modalite => {
               
                console.log(modalite);
            });
        })
    }
   
    static updateModalite(data){
        return new Promise(async(next)=>{
            const modalite =  Modalite.update(
             
        ).then(modalite => {
            
        });
        })
    }
  
}