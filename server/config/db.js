const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect()
    }
    catch(error){
        
    }
}