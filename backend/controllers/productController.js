import express from "express";
const router = express.Router();
import asyncHandler from "..//middleware//asyncHandler.js"
import Product from "../models/productModel.js";
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    
    res.json(products);
    }
);

const getProductById = asyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    
    if (products) {
        res.json(products);
    } else {
        res.status(404);
        throw new Error("Product not found");
    }
    }
);

export { getProductById, getProducts };

