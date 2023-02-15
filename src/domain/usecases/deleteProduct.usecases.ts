import { IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"

export class DeleteProductUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async deleteProductById(id:string){
        return await this.repository.delete(id) 
    }
}
