import ProductModel from './model.js';
export const create = async (req, res) => {
    const { name, code, _id, description, category, measure, pkg, brand } = req.body;
    try {
        const product = new ProductModel({
            name,
            code,
            _id,
            description,
            category,
            measure,
            pkg,
            brand
        });
        await product.save();
        res.status(200).send(product);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
export const getProduct = async (req, res) => {
    res.status(200).send({
        data: "hi"
    });
};
