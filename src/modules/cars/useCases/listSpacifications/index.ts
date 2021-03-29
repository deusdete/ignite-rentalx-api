import { SpecificationRepository } from "../../repositories/implementations/SpacificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const spacificatioRepository = SpecificationRepository.getInstance();
const istSpecificationsUseCase = new ListSpecificationsUseCase(
  spacificatioRepository
);
const listSpecificationsController = new ListSpecificationsController(
  istSpecificationsUseCase
);

export { listSpecificationsController };
