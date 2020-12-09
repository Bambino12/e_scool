const bcrypt =require('bcrypt');
const {Formation, User, Univercite} =require('../models/relation');


exports.UniverciteQuery = class{
    static setUnivercite(data){
        return new Promise(async(next)=>{
            console.log(data.ufr)
            const univ = await Univercite.create({
                nom:data.nom,
                ufr:data.ufr
            }).then(univercite => {
                console.log(univercite)
                next(univercite)
               
            }).catch(function (e) {
                console.log( 'ici sont les erreur =>',e)
                next(e)
            });
        })
    }
    static getAllUnivercite(){
        return new Promise(async(next)=>{
            const univ = await Univercite.findAll({
            }).then(univercite => {
               next(univercite)
            }).catch(e=>{
                next(e)
            });
        })
    }
  


    static getUniverciteById(data){
        return new Promise(async(next)=>{
            const univ= await  Univercite.findOne({where:{id:data}}).then(univercite => {
                console.log(univercite);
                next(univercite)
            }).catch(e=>{
                next(e)
            });
        })
    }
   
    static updateUnivercite(data){
        return new Promise(async(next)=>{
            const univ =  Univercite.update(
            {
            nom :data.nom,
            ufr:data.ufr
            },
            { where: { id : data.id }}
        ).then(univercite => {
            next(univercite)
        }).catch(e=>{
            next(e)
        });
        })
    }

    static removeUnivercite(data){
        return new Promise(async(next)=>{
            const univ = await Univercite.destroy({
                where: {
                   id: data.id
                }
             }).then(function(rowDeleted){ // rowDeleted will return number of rows deleted
               if(rowDeleted === 1){
                  console.log('Deleted successfully');
                  next(rowDeleted)
                }
             }, function(err){
                 console.log(err); 
                 next(err)
             });
        })
      
    }
  
}