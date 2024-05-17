"use strict"
/**
 * @author Arpit Nakarani
 * @description Server and REST API config
 */
import * as bodyParser from 'body-parser';
import express, { Request, Response } from 'express';  
import http from 'http';
import cors from 'cors'
import { mongooseConnection} from './database'
import * as packageInfo from '../package.json'
import { router } from './Routes'
// import { get_all_data } from './controllers/admin';
import c from 'config';
import { aeps_response, createHashKey, deposit_verification_payment_ss, withdraw_callback } from './controllers/admin';
 
const app = express();


app.use(cors())
app.use(mongooseConnection)
app.use(bodyParser.json({ limit: '200mb' }))

app.use(bodyParser.urlencoded({ limit: '200mb', extended: true }))
const health = (req, res) => {
    return res.status(200).json({
        message: `Testing Server is Running, Server health is green`,
        app: packageInfo.name,
        version: packageInfo.version,
        description: packageInfo.description,   
        author: packageInfo.author,
        license: packageInfo.license
    })
}
const bad_gateway = (req, res) => { return res.status(502).json({ status: 502, message: "Q&A Backend API Bad Gateway" }) }

app.post('/', health);
app.get('/health', health);
app.get('/isServerUp', (req, res) => {
    res.send('Server is running ');
});
app.use(router)
app.use('*', bad_gateway);
// awao createHashKey
let server = new http.Server(app);
export default server;

// aeps_response()
// deposit_verification_payment_ss()
// withdraw_callback()