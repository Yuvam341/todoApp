const mysche=require('../models/todoschema');

const mongoose=require('mongoose');

// our create controller
module.exports.cre=function(req,res){
 
    mysche.create({
       desc:req.body.desc,
       category:req.body.category,
       date:req.body.date
   },function(err,newContact){
           if(err){
               console.log('errrrrr');
           return;
           }
          
               
   });
       return res.redirect('back');
}