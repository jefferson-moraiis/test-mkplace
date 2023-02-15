import { Request, Response } from "express";
import {AddProductsUsecases} from "../../domain/usecases/addProduct.usecases";
import { errorResult } from '../utils/error'
export class AddProductController {

    constructor(private addProductUseCase: AddProductsUsecases) {}

    async handle(req:Request, res:Response){
        try {
            await this.addProductUseCase.createProduct(req.body)
            res.status(201).json({data:'product created successfully'})
        } catch (error) {  
            res.status(error.status | 500).json(errorResult(error));
        }
    }
}
