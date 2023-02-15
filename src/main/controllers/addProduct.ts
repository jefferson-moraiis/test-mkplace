import { Request, Response } from "express";
import {AddProductsUsecases} from "../../domain/usecases/addProduct.usecases";
import { IProduct } from "../../domain/interfaces/product.interface";

export class AddProductController {

    async handle(req:Request, res:Response): Promise<string | Error>{
        return await new AddProductsUsecases().createProduct(req.body)
    }
}
