import { IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"
import { Product } from "../entities/product.entity"

export class GetProductsUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async getAllProducts(){
        return await this.repository.getAll()  
    }
    async getProductById(id:string){
        return await this.repository.getById(id) 
    }
}
