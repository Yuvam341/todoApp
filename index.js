//requiring express
const express=require('express');
const path=require('path');
//defining port on which our server runs
const port = 2000;
//calling express
const app=express();


//parser for form post data
app.use(express.urlencoded());
const mongoose=require('./config/mongoose');
//ussing middleware to access static files like css , html
app.use(express.static(path.join(__dirname,'assets')));

//requiring routers 
app.use('/',require('./routers'));


//setting view engine and views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));


//listening 
app.listen(port,function(err){
    if(err){
        console.log('error');
    }
    console.log('server is up and running on port',port);
})