import { Router } from 'express'
import { 
    AddProductController, 
    GetAllProductController, 
    GetProductByIdController,
    DeleteProductByIdController,
    UpdateProductController
} from '../controllers'

const router = Router()


router.post('/product/create',new AddProductController().handle) 
router.get('/products',new GetAllProductController().handle) 
router.get('/product/:id',new GetProductByIdController().handle) 
router.put('/product/:id',new UpdateProductController().handle)
router.delete('/product/:id',new DeleteProductByIdController().handle)



export {router}