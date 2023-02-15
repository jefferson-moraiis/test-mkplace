import { Request, Response } from "express";
import { GetProductsUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class GetProductByIdController {

    async handle(req:Request, res:Response){
        try {
            const { id } = req.params;
            const product = await new GetProductsUsecases().getProductById(id);
            res.status(200).json({data:product});
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }
        
    }
}
