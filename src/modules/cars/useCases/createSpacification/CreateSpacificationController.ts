import { Request, Response } from "express";

import { CreateSpesificationUseCase } from "./CreateSpesificationUseCase";

class CreateSpacificationController {
  constructor(private createCategoryUseCase: CreateSpesificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpacificationController };
