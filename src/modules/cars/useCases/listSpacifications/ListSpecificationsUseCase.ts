import { Specification } from "../../model/specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
  constructor(private spacificatioRepository: ISpecificationRepository) {}
  execute(): Specification[] {
    const specifications = this.spacificatioRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
