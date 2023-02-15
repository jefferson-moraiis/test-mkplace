import { Router } from "express";
import { serve, setup } from 'swagger-ui-express'
import  swaggerConfig  from '../docs';
import {
  AddProductFactory,
  getAllProductFactory,
  getByIdProductFactory,
  updateIdProductFactory,
  deleteProductFactory,
} from "../factories";

const router = Router();

router.post("/product/create", (request, response) =>AddProductFactory().handle(request, response));
router.get("/products", (request, response) =>getAllProductFactory().handle(request, response));
router.get("/product/:id", (request, response) =>getByIdProductFactory().handle(request, response));
router.put("/product/update", (request, response) =>updateIdProductFactory().handle(request, response));
router.delete("/product/delete/:id", (request, response) =>deleteProductFactory().handle(request, response));
router.use('/documentation',serve, setup(swaggerConfig))


export { router };
