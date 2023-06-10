import { Category } from "../../shared/models/category.inyterface"

export interface ICategoryContext {
    categories: Category[] | null,
    error: boolean | null,
    setSelectedCategory: Function,
    selectedCategory: string
}