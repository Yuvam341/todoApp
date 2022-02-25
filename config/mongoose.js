const mongoose = require('mongoose');
//connecting our database to local database 
mongoose.connect('mongodb://localhost/test5');

//establishing connection
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error while connecting to db'));

//function when our connection is open
db.once('open',function(){
    console.log('successfulyy connected to databse');
})