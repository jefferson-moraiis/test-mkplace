import { DeleteProductByIdController} from '../controllers'
import { ProductRepository } from '../../infra/repositories/addProduct.repository'
import { DeleteProductUsecases } from '../../domain/usecases'

export const deleteProductFactory = () => {
    const deleteProductsRepository = new ProductRepository()
    const deleteByIdProductUsecases = new DeleteProductUsecases(deleteProductsRepository)
    return new DeleteProductByIdController(deleteByIdProductUsecases)
};