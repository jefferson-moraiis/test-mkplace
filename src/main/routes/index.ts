import { Router } from "express";
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
router.delete("/product/:id", (request, response) =>deleteProductFactory().handle(request, response));

export { router };
