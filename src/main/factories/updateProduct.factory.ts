import { UpdateProductController} from '../controllers'
import { ProductRepository } from '../../infra/repositories/addProduct.repository'
import { UpdateProductUsecases } from '../../domain/usecases'

export const updateIdProductFactory = () => {
    const updateProductsRepository = new ProductRepository()
    const updateProductUsecases = new UpdateProductUsecases(updateProductsRepository)
    return new UpdateProductController(updateProductUsecases)
};