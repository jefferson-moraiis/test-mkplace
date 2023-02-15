import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"
import { Product } from "../entities/product.entity"

export class AddProductsUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async createProduct(product: IProduct){
        const data = await Product.create(product)
        return await this.repository.add(data)  
    }
}
