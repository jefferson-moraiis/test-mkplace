import { IProduct } from "../../../../domain/interfaces/product.interface";
import { model, Schema } from "mongoose";

const productSchema = new Schema({
    id:{
        type:String
    },
    name:{
        type:String,
        require: true
    },
    brand:{
        type:String,
        require: true
    },
    vendor:{
        type:String,
        require: true
    },
    price: {
        type:Number,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

export const ProductModel = model<IProduct>('Products', productSchema);
