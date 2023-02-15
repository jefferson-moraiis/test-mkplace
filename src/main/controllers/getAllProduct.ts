import { Request, Response } from "express";
import { GetProductsUsecases } from "../../domain/usecases";
import { errorResult } from '../utils/error'

export class GetAllProductController {

    constructor(private getProductUseCase: GetProductsUsecases) {}

    async handle(req: Request, res: Response) {
        const query = req.query
        try {
            const products = await this.getProductUseCase.getAllProducts()
            if (req.query) {
                const filteredProducts = await this.getProductUseCase.getProductFiltered(query)
                return res.status(200).json(filteredProducts);
            }
            res.status(200).json(products);
        } catch (error) {
            res.status(error.status | 500).json(errorResult(error));
        }

    }
}
