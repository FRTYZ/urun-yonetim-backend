import { Request, Response, NextFunction } from 'express';

// Models
const Products = require('../models/products'); 

// Error 
const CustomError = require('../errors/CustomError');

// Helpers
const File = require('../helpers/fileUpload');

exports.getProduct = async function (req: Request, res: Response, next: NextFunction) {
    try {
        const values = await Products.find({});

        return res.status(200).json(values);
    }catch (err){
        next(err)
    }
}

exports.postProduct = async function (req: Request, res: Response, next: NextFunction) {
    
    try {
        const {name, description, price, stock} = req.body;
        const getImage = req.file;

        if(!getImage){
            throw new CustomError(403, "select the product picture field");
        }
        if(!name || name == ''){
            throw new CustomError(403, "You need to specify the name field.");
        }
        if(!description || name == ''){
            throw new CustomError(403, "You need to specify the description field.");
        }
        if(!price || price == ''){
            throw new CustomError(403, "You need to specify the price field.");
        }
        if(!stock || stock == ''){
            throw new CustomError(403, "You need to specify the stock field.");
        }

        const featuredImage = await File.uploadFile(getImage, 'products/' + name  + '/' );

        const newProduct = new Products({ 
            name,
            description,
            price,
            stock,
            featuredImage
        });
        
        await newProduct.save();

        return res.status(201).json({ sucess: true })

    }catch (err){
        next(err)
    }
}
