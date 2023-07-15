import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './/middleware//errorMiddleware.js';
import productRoutes from './/routers//productRoutes.js';
import userRoutes from './/routers//userRoutes.js';
import cookieParser from 'cookie-parser';
const port=process.env.PORT || 5000;

connectDB();

const app=express();
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie parser middleware
app.use(cookieParser());

app.get('/',(req, res)=>{
    res.send('Server is ready');
});
app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
}
);