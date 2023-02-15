import { Router } from 'express'
import { AddProductController } from '../controllers/addProduct'

const router = Router()


router.post('/products/create',new AddProductController().create) 


export {router}