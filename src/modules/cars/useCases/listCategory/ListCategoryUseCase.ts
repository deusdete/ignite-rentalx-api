import { Category } from "../../model/category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute(): Category[] {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
