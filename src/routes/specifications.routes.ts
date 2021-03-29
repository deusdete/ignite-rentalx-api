import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateSpesificationService } from "../modules/cars/services/CreateSpesificationService";

const specificationsRouter = Router();

const specificationRepository = new CategoryRepository();

specificationsRouter.get("/", (request, response) => {
  const all = specificationRepository.list();

  return response.json(all);
});

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpesificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRouter };
