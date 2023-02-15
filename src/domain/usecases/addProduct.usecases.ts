import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"


export class AddProductsUsecases {
    

    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }


    async createProduct(product: IProduct){
        if(!product){
            throw new Error("product not be empty");
            
        }
        try {
            return await this.repository.add(product)
        } catch (error) {
            throw new Error("it was not possible to register the product");
            
        }
    }
}
