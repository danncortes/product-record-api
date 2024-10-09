import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
import { Product, Measures } from './types.js'

const product = {
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    measure: {
        type: String,
        required: true
    },
    pkg: {
        type: Boolean,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
}

const productSchema = new Schema<Product>(product, {
    timestamps: true
});

export default model<Product>('Product', productSchema);