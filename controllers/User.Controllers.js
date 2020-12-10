const bcrypt =require('bcrypt');
// const { User } = require('../models/user');
const {User, Formation} =require('../models/relation');

exports.UserQueries = class{
    static setUser(data){
        return new Promise(async(next)=>{
            const user = await User.create({
                name: data.name,
                prenom: data.prenom,
                mail : data.mail,
                password:data.password,
                naissence_etud: data.naissence_etud
            }).then(user => {
                next(user.dataValues)
            }).catch(function (e) {
                next(e)
            });
        })
    }
    static getAllUser(){
        return new Promise(async(next)=>{
            const user = await User.findAll({
            }).then(users => {
               console.log(users)
               next(users)
            }).catch((e)=>{
                console.log('voici erreur la:',e)
                next(e)
            });
        })
    }
  


    static getUserById(data){
        return new Promise(async(next)=>{
            const user= await  User.findById(id, {
                include: [{model: Model.Role}]
            }).then(user => {
                console.log(user.role.name);
                next(user)
            });
        })
    }
   
    static updateUser(data){
        return new Promise(async(next)=>{
            const user =  User.update(
                {where: {id: id}}
        ).then(user => {
            next(user)
        });
        })
    }
  
}