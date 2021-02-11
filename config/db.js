const mongoose = require('mongoose');
const config = require('config');
const db = config.get('uriString');

const connectDB = async () =>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MonoDB COnnected")
    }
    catch(err){
        console.error(err.message)
        //Exit from the process
        process.exit(1);
    }
};
module.exports = connectDB;