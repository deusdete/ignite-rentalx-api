import { Category } from "../model/category";

interface ICreateCatogoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCatogoryDTO): void;
}

export { ICategoryRepository, ICreateCatogoryDTO };
