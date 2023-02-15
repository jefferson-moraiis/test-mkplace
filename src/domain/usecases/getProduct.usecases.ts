import { IProduct, IProductRepository } from "../interfaces/product.interface"
import CacheUtil from "../../main/utils/cache"
import { Product } from "../entities/product.entity";

export class GetProductsUsecases {

    private cache;
    constructor(private repository: IProductRepository) {
        this.cache = CacheUtil
    }

    async getAllProducts() {
        return await this.repository.getAll()
    }
    async getProductById(id: string) {
        const cache = this.cache.get(id)
        if(cache){
            return cache
        }
        const product = await await this.repository.getById(id)
        await this.cache.set(id,product)
        return product
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
