import { Category } from "../../shared/models/category.inyterface"

export interface ICategoryContext {
    categories: Category[],
    loading: boolean,
    error: boolean,
    setCategories?: Function,
    setLoading?: Function,
    setError?: Function
}