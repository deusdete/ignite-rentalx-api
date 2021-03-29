import { SpecificationRepository } from "../../repositories/implementations/SpacificationRepository";
import { CreateSpacificationController } from "./CreateSpacificationController";
import { CreateSpesificationUseCase } from "./CreateSpesificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const createSpacificationUseCase = new CreateSpesificationUseCase(
  specificationRepository
);

const createSpacificationController = new CreateSpacificationController(
  createSpacificationUseCase
);

export { createSpacificationController };
