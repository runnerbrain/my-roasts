const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDb() {
    try{
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to MongoDB Atlas');
        return mongoose.connection;
    } catch(error){
        console.error('Error connecting to MongoDB Atals:', error);
        throw error;
    }
    
}

module.exports = connectToDb;