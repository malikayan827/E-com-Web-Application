import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './/middleware//errorMiddleware.js';
import productRoutes from './/routers//productRoutes.js';

const port=process.env.PORT || 5000;

connectDB();

const app=express();
app.get('/',(req, res)=>{
    res.send('Server is ready');
});
app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
}
);