// const express= require('express');
import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';

import connectDB from './Config/db.js';
//import routes
import testRoutes from './Routes/testRoutes.js';
import authRoutes from './Routes/authRoutes.js';
import errorMiddleware from './Middleware/errorMiddleware.js';
//dot env config
dotenv.config();

//mongodb connection
connectDB();

//rest object 
const app= express();

//middleware
app.use(express.json());


//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);

//validation middleware
app.use(errorMiddleware);


//port
const port= process.env.PORT || 8080;



app.listen(port,()=>{
    console.log(`server is running port number ${port}`);
})