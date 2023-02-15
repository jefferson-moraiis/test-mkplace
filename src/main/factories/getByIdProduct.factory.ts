import { GetProductByIdController} from '../controllers'
import { ProductRepository } from '../../infra/repositories/addProduct.repository'
import { GetProductsUsecases } from '../../domain/usecases'

export const getByIdProductFactory = () => {
    const getProductsRepository = new ProductRepository()
    const getByIdProductUsecases = new GetProductsUsecases(getProductsRepository)
    return new GetProductByIdController(getByIdProductUsecases)
};