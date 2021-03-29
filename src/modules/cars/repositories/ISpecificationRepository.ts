import { Specification } from "../model/specification";

interface IRISpecificationRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  list(): Specification[];
  create({ name, description }: IRISpecificationRepositoryDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, IRISpecificationRepositoryDTO };
