//---  |||   IMPORTS   ||| ---
import * as dotenv from 'dotenv';
import express from "express"
import router from "./routes/testing"
import db_connect from './configs/db';

import bodyParser from "body-parser"
import { ServerResponse } from 'http';

//--- ||| INITIAL SETTINGS  |||  ---
//setting environment variables
dotenv.config({ path: '../.env' })


//--- |||  SERVER SETUP  |||  ---
const server: express.Express = express()
const db = db_connect(process.env.DB_URI as string)

server.use(bodyParser.json())
server.use(router);

//set the server to listen on PORT given on .env file (set to 3005 on development)
server.listen(process.env.PORT, () => {
    console.log("server running on port "+process.env.PORT)
})