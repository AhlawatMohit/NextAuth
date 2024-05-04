import mongoose from "mongoose";


export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        const connection = mongoose.connection;

        connection.on('connected', () => {
        console.log("Connected to MongoDB")
        })

        connection.on('error', (error) => {
        console.log('MongoDB connected error, please make sure db is up and running: ' + error);  
        process.exit(); 
        })

    } catch (error) {
        console.log('Error in MongoDB connection');
        console.log(error);
    }
} 