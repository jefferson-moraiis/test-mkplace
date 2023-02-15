import { Request, Response } from "express";
import { UpdateProductUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class UpdateProductController {

    async handle(req: Request, res: Response) {
        try {
            const data = await new UpdateProductUsecases().updateProduct(req.body)
            res.status(201).json({ data })
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }
    }
}
