import { IProductRepository } from "../interfaces/product.interface"

export class GetProductsUsecases {
    
    constructor(private repository: IProductRepository) {}
    
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
