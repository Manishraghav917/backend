// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

// then catch because async function returns promises.

.then(()=>{

    
    // assignment 
    app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error;
    });


    app.listen(process.env.PORT || 8000 ,() => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connnection failed",err);
    
}) 