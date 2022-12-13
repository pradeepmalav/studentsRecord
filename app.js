
import express from 'express';
import bodyParser from'body-parser';
import mongoose from 'mongoose';
const app = express();

import http from 'http';
const httpServer = http.createServer(app);

import {dbConnect} from './src/config/db.js';
import {studentRouter} from './src/routes/studentRoute.js';

mongoose.set('strictQuery', false)
dbConnect();

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers
app.use('/', studentRouter)

app.get('/', (req, res) => {
    res.status(200).send({
        message:"Welcome User"
    })
})



const port = 8000;
httpServer.listen(port, () => { console.log(`Server is running on http://localhost:${port}`) })
