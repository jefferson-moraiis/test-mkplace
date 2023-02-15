import { IProduct, IProductRepository } from "../interfaces/product.interface"
import { ProductRepository } from "../../infra/repositories/addProduct.repository"

export class GetProductsUsecases {
    private repository: IProductRepository
    constructor() {
        this.repository = new ProductRepository()
    }
    async getAllProducts() {
        return await this.repository.getAll()
    }
    async getProductById(id: string) {
        return await this.repository.getById(id)
    }
    async getProductFiltered(query) {
        let filter = []
        Object.keys(query).forEach(key => {
            filter.push({ [key]: query[key] })
        })
        const productsFilter = await this.repository.getFiltered(filter)
        return productsFilter
    }
}
