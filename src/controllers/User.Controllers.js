const bcrypt =require('bcrypt');
// const { User } = require('../models/user');
const {User, Formation} =require('../models/relation');

exports.UserQueries = class{
    static setUser(data){
        return new Promise(async(next)=>{
            const user = await User.create({
                name: 'Test',
                prenom: 'kevin',
                mail : 'test@testmail.com',
                age: 11,
                password:'salut le boss',
                matricule:'VOLB10059401',
                numero: 56056396,
            }).then(user => {
                console.log(user)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
            });
        })
    }
    static getAllUser(){
        return new Promise(async(next)=>{
            const user = await User.findAll({
               where:{id:1},
               include:[{model: users}]
            }).then(users => {
               console.log(users)
            }).catch((e)=>{
                console.log('voici erreur la:',e)
            });
        })
    }
  


    static getUserById(data){
        return new Promise(async(next)=>{
            const user= await  User.findById(id, {
                include: [{model: Model.Role}]
            }).then(user => {
                console.log(user.role.name);
            });
        })
    }
   
    static updateUser(data){
        return new Promise(async(next)=>{
            const user =  User.update(
                {where: {id: id}}
        ).then(user => {
            
        });
        })
    }
  
}