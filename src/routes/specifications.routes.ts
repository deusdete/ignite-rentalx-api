import { Router } from "express";

import { createSpacificationController } from "../modules/cars/useCases/createSpacification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpacifications";

const specificationsRouter = Router();

specificationsRouter.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

specificationsRouter.post("/", (request, response) => {
  return createSpacificationController.handle(request, response);
});

export { specificationsRouter };
