import { Request, Response } from "express";
import { DeleteProductUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class DeleteProductByIdController {

    async handle(req:Request, res:Response){
        try {
            const { id } = req.params;
            await new DeleteProductUsecases().deleteProductById(id);
            res.status(200).json({data:'product deleted'});
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }
        
    }
}
