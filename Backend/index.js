import express from "express";
import dotenv from "dotenv";
import { connection } from "./database/Db.js";
import route from "./router/userRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors({
    origin : "http://localhost:5173",
    Credential : true
}))
app.use(express.json());
app.use(route);


app.listen(process.env.APP_PORT, () => {
     connection();
    console.log(`Server up and running http://localhost:${process.env.APP_PORT}`);
});