import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {

    try {

        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected !! DB_HOST: 
            ${connectionInstance.connection.host} `); // used for knowing at which host we are connected.
        
        
        
    } catch (error) {
        console.log("MongoDB connection Error",error);
        process.exit(1) //node process allows

        
    }

}

export default connectDB