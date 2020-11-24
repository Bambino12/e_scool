const bcrypt =require('bcrypt');
// const User = require('../models/user');
const {User} =require('../models/relation');

exports.UserQueries = class{
    static setUser(data){
        console.log(User)
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
}