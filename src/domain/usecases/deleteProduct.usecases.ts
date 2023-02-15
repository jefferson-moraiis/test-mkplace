import { IProductRepository } from "../interfaces/product.interface"

export class DeleteProductUsecases {
    
    constructor(private repository: IProductRepository) {}

    async deleteProductById(id:string){
        return await this.repository.delete(id) 
    }
}
