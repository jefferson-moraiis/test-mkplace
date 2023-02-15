import { AddProductController} from '../controllers'
import { ProductRepository } from '../../infra/repositories/addProduct.repository'
import { AddProductsUsecases } from '../../domain/usecases'

export const AddProductFactory = () => {
    const usersRepository = new ProductRepository();
    const createUser = new AddProductsUsecases(usersRepository);
    const createUserController = new AddProductController(createUser);
    return createUserController;
};