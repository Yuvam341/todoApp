const mysche=require('../models/todoschema');
const mongoose=require('mongoose');
//our update controller
module.exports.updatetask=function(req,res){
    let r=req.body;
   
    mysche.findOneAndUpdate(req.query.id,{desc:r.desc,category:r.category,date:r.date},function(err,con){
        if(err){
            console.log('err');
        }
    })
    
   
      return res.redirect('/')
  
}

