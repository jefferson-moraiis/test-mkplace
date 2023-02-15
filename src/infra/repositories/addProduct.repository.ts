import { IProduct, IProductRepository } from "../../domain/interfaces/product.interface"


export class ProductRepository implements IProductRepository {
    async add(product: IProduct): Promise<boolean> {
        return true
    }
    async getAll(): Promise<IProduct> {
        return new Promise<IProduct>((resolve, reject) => {})
    }
    async getById(id: string): Promise<IProduct> {
        return new Promise<IProduct>((resolve, reject) => {})
    }
    async update(product: IProduct): Promise<IProduct> {
        return new Promise<IProduct>((resolve, reject) => {})
    }
    async delete(id:string): Promise<boolean> {
        return true
    }
}
