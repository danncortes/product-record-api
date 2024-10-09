import { ObjectId } from "mongodb";
import { Schema, model } from "mongoose";
const product = {
    _id: {
        type: Number,
        required: true
    },
    code: {
        type: ObjectId,
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
};
const productSchema = new Schema(product, {
    timestamps: true
});
export default model('Product', productSchema);
