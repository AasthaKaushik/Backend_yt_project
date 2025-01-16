import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({
    path:'./env'
})

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(` Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed ! ",err);
})
























































































































































// (async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("error",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.log("error",error);
//     }
// })()