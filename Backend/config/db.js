import mongoose from "mongoose";

const connectDB = async () => {

    const MONGO_URL = process.env.MONGO_URI;

    if (!MONGO_URL) {
        console.log("MongoDb connection string is not present  in .env file");
        return;
    }
    try {
        const conn = await mongoose.connect(MONGO_URL || '');
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }
    catch (err) {
        console.log("Mongo connection failed !!", err);
        process.exit(1);
    }
};

export default connectDB;