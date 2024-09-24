import { Request, Response, NextFunction } from 'express';

// Models
const Products = require('../models/products'); 

// Error 
const CustomError = require('../errors/CustomError');

// Helpers
const File = require('../helpers/fileUpload');

const { Types } = require('mongoose');

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

exports.putProduct = async function (req: Request, res: Response, next: NextFunction) {

    try {
        const {product_id} =  req.params;
        const {name, description, price, stock} = req.body;
        const getImage = req.file;

        if(!product_id || product_id == ''){
            throw new CustomError(403, "You need to specify the product_id field.");
        }

        const isValidId = Types.ObjectId.isValid(product_id);

        if (!isValidId) {
            throw new CustomError(400, "Invalid ID format.");
        }

        const values = await Products.findById(product_id);

        if(!values){
            throw new CustomError(404, "No data found.");
        }

        let featuredImage;
        if(getImage){
            featuredImage = await File.uploadFile(getImage, 'products/' + name  + '/', values.featuredImage.pathName );
        }

        const updatedUser = await Products.findByIdAndUpdate(
            product_id,
            {  
                name, 
                description, 
                price, 
                stock,
                featuredImage 
            }, 
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            throw new CustomError(500, "Server error. Please try again.");
        }

        return res.status(200).json({ sucess: true })

    }catch (err){
        next(err)
    }
}

exports.deleteProduct = async function (req: Request, res: Response, next: NextFunction) {

    try {
        const {product_id} =  req.params;

        if(!product_id || product_id == ''){
            throw new CustomError(403, "You need to specify the product_id field.");
        }

        const isValidId = Types.ObjectId.isValid(product_id);

        if (!isValidId) {
            throw new CustomError(400, "Invalid ID format.");
        }

        const values = await Products.findById(product_id);

        if(!values){
            throw new CustomError(404, "No data found.");
        }

        if(values?.featuredImage){
            await File.deleteFile(values?.featuredImage.pathName)
        }

        const deleteProduct = await Products.findByIdAndDelete(product_id);

        if (!deleteProduct) {
            throw new CustomError(500, "Server error. Please try again.");
        }

        return res.status(200).json({ sucess: true })

    }catch (err){
        next(err)
    }
}