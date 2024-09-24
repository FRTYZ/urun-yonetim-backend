import { Request, Response, NextFunction } from 'express';

// Models
const Products = require('../models/products'); 

exports.getProduct = async function (req: Request, res: Response, next: NextFunction) {
    try {
        const values = await Products.find({});

        return res.status(200).json(values);
    }catch (err){
        console.log(err)
        next(err)
    }
}
