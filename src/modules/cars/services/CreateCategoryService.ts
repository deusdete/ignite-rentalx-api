import { ICategoryRepository } from "../repositories/ICategoryRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error("Category already exist");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
