import { IProductRepository } from "../../domain/interfaces/product.interface"


export class ProductRepository implements IProductRepository {
    add(product: any): string {
        console.log(product);
        return 'ok'
    }
}
