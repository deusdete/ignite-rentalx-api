import { Category } from "../model/category";
import { ICreateCatogoryDTO, ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCatogoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const catogory = this.categories.find((category) => category.name === name);
    return catogory;
  }
}

export { CategoryRepository };
