import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpesificationUseCase {
  constructor(private specificationRepoditory: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationRepoditory.findByName(
      name
    );

    if (specificationAlreadyExist) {
      throw new Error("Specification alteady exist ");
    }

    this.specificationRepoditory.create({ name, description });
  }
}

export { CreateSpesificationUseCase };
