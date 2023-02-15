import { Request, Response } from "express";
import { UpdateProductUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class UpdateProductController {

    constructor(private updateProductUseCase: UpdateProductUsecases) {}

    async handle(req: Request, res: Response) {
        try {
            const data = await this.updateProductUseCase.updateProduct(req.body)
            res.status(200).json({ data })
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }
    }
}
