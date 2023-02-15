import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"
import { Product } from "../entities/product.entity"

export class UpdateProductUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async updateProduct(product: IProduct){
        if(!product.id){
            throw new Error("id is required")
        }
        const data = Product.create(product)
        return await this.repository.update(data) 
    }
}
