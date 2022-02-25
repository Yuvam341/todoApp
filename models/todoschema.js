//requiring mongoose
const mongoose = require('mongoose');
//creating our schema for setting structure in our local database
const todoSchema=mongoose.Schema({
   desc: {type:String,
    required:true},
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }

})
//defining model (collection name)
const mydb=mongoose.model('todo',todoSchema);
//exporting mydatabase
module.exports=mydb;