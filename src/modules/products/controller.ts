import { Request, Response } from 'express';
import ProductModel from './model.js';
import { Product } from './types.js';

export const create = async (req: Request, res: Response): Promise<void> => {
    const { name, code, description, category, measure, pkg, brand } = req.body;

    try {
        const product = new ProductModel<Omit<Product, '_id'>>({
            name,
            code,
            description,
            category,
            measure,
            pkg,
            brand
        });
        
        await product.save();
        res.status(200).send(product);
    } catch (err) {
        res.status(400).send(err);
    }
};