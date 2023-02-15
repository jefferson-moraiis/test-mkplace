import { IProduct, IProductRepository } from "../../domain/interfaces/product.interface"
import { ProductModel } from "../database/mongodb/models/products.model"
export class ProductRepository implements IProductRepository {
    async add(data: IProduct): Promise<IProduct> {
        return await ProductModel.create(data);
    }
    async getById(id: string): Promise<IProduct> {
        return await ProductModel.findById(id);
    }
    async getAll(): Promise<IProduct[]> {
        return await ProductModel.find();
    }
    async update(product: IProduct): Promise<IProduct> {
        return await ProductModel.findByIdAndUpdate(product.id, 
            { $set: { ...product, updatedAt: Date.now() } }, {
            returnOriginal: false
        });
    }
    async delete(id: string): Promise<boolean> {
        await ProductModel.findByIdAndDelete(id)
        return true
    }

}