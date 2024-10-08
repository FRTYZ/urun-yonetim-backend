import { Request, Response, NextFunction } from 'express';

const allowedOrigins: string[] = require('../config/allowedOrigins');

// İzin verilen url listesinden api isteğini yapması için, kullanılan fonksiyondur.
const credentials = (req: Request, res: Response, next: NextFunction) => {
    const origin: string = req.headers.origin!;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
}

module.exports = credentials