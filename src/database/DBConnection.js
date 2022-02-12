const mongoose = require("mongoose")


const config = require("../config/index")
const DBConnection = async ()=>{

    try{
        await mongoose.connect(config.mongoUri);
    console.log('DB is connection');
    }catch (error){
        console.log(error)
        throw new Error('failed to initialise database')
    }

};


module.exports = DBConnection;