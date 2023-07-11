const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bennix123:z0iesXwFobFDfUY8@abhishek.wejoxb5.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db