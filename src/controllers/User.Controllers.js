const bcrypt =require('bcrypt');
const {User} =require('../models/relation');

exports.UserQueries = class{
    static setUser(data){
        return new Promise(async(next)=>{
            const user = await User.create({
                name: 'Test',
                email : 'test@testmail.com',
                prenom: 'kevin',
                age: 11,
                password:'salut le boss',
                matricule:'VOLB10059401'
            }).then(user => {
                console.log(user)
               
            }).catch(function (e) {
                console.log(e)
            });
        })
    }
}