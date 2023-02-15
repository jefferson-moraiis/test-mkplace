import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { Product } from "../entities/product.entity"

export class UpdateProductUsecases {
    
    constructor(private repository: IProductRepository) {}

    async updateProduct(product: IProduct){
        if(!product.id){
            throw new Error("id is required")
        }
        const data = Product.create(product)
        return await this.repository.update(data) 
    }
}
