import { Request, Response } from "express";
import {AddProductsUsecases} from "../../domain/usecases/addProduct.usecases";
import { errorResult } from '../utils/error'
export class AddProductController {

    async handle(req:Request, res:Response){
        try {
            await new AddProductsUsecases().createProduct(req.body)
            res.status(201).json({data:'product created successfully'})
        } catch (error) {  
            res.status(error.status | 500).json(errorResult(error));
        }
    }
}
