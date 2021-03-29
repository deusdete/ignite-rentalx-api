import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";

const categoriesRouter = Router();

categoriesRouter.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoriesRouter };
