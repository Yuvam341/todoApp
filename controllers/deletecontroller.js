const mysche=require('../models/todoschema')

//our delete controller
module.exports.del=function(req,res){
    let q=req.body.delete;
    console.log(q);
    if(q == undefined){
        res.send('<h1 style="text-align:center"> Please Select Something to delete');
        return res.redirect('/');
    }
    if(typeof(q) == 'string'){
        mysche.findByIdAndDelete(q,function(err){
            if(err){
                console.log('error is there');
            }
        })
    }
    else{
    for(var i of q){
        mysche.findByIdAndDelete(i,function(err){
            if(err){
                console.log('error is there');
            }
        })
    }
    }
    
    return res.redirect('back');
}