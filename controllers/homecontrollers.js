const mysche=require('../models/todoschema');
const mongoose=require('mongoose');

//our home controller
module.exports.home=function(req,res){
    mysche.find({},function(err,myc){
        if(err){
            console.log('errrr');
        }
        return res.render('home',{myc:myc});
    })
}