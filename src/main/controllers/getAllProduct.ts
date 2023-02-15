import { Request, Response } from "express";
import { GetProductsUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class GetAllProductController {

    async handle(req:Request, res:Response){
        try {
            const products = await new GetProductsUsecases().getAllProducts()
            res.status(200).json(products);
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }
        
    }
}
