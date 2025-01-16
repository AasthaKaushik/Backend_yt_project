import express from express;
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();
// use method middlewares ke liye configuration mei aata h 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


// mei json ko accept kr rha hai 
app.use(express.json({limit :"16kb"}))
app.use(express.urlencoded({extended:true , limit :"16kb"}))

app.use(express.static("public")) // assets ke liye like images
app.use(cookieParser())


export {app}