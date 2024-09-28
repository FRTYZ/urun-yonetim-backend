import { Request, Response, NextFunction } from 'express';

exports.getHome = async function (req: Request, res: Response, next: NextFunction) {
    try {
        return res.status(200).render("index", {
            title : "MUHİKU - Ürün Yönetim Sistemi Case Study | Fırat Yıldız",
        }) 
    } catch (err) {
        next(err);
    }
};
