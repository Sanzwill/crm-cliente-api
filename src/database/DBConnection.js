const mongoose = require("mongoose")
const DBConnection = a
const url = " mongodb+srv://hugowil:TIu6kFITY78BT1R2@curso-mongodb.rknaw.mongodb.net/crm-clientes";

const DBConnection = async ()=>{

    try{
        await mongoose.connect(uri);
    console.log('DB is connection');
    }catch (error){
        console.log(error)
        throw new Error('failed to initialise database')
    }

};


module.exports = DBConnection;