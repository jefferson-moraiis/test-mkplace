import { IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"
import { Product } from "../entities/product.entity"

export class GetProductsUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async getAllProducts(){
        const data = await this.repository.getAll()  
        return Product.create(data)
    }
    async getProductById(id:string){
        const data = await this.repository.getById(id) 
        return Product.create(data)
    }
}
