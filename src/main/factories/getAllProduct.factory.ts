import { GetAllProductController} from '../controllers'
import { ProductRepository } from '../../infra/repositories/addProduct.repository'
import { GetProductsUsecases } from '../../domain/usecases'

export const getAllProductFactory = () => {
    const getProductsRepository = new ProductRepository()
    const getAllProductUsecases = new GetProductsUsecases(getProductsRepository)
    return new GetAllProductController(getAllProductUsecases)
};