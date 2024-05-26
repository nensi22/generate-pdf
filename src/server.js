import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import {getResult} from "./base/baseController.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    console.log("Default routes")
    return getResult(res, 200,  "Hey. Its my testing routes","Get routes successfully")
})

app.listen(config.PORT, ()=>{
    console.log(`Server listening on port ${config.PORT}`)
})