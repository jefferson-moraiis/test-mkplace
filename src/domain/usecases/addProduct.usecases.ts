import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { Product } from "../entities/product.entity"

export class AddProductsUsecases {

    constructor(private repository: IProductRepository) {}

    async createProduct(product: IProduct){
        const data = await Product.create(product)
        return await this.repository.add(data)  
    }
}
