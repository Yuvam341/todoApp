const mysche=require('../models/todoschema')


// for our edit controller
module.exports.editList=function(req,res){
   let q=req.query;
 
   return res.render('edit',{my:q})
}