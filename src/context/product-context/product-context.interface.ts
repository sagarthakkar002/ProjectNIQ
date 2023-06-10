import { Product } from "../../shared/models/product.interface";

export interface IProductContext {
    products: Product[],
    selectProduct: Product | null,
    loading: boolean,
    error: boolean,
    setProducts?: Function,
    setProduct?: Function,
    setLoading?: Function,
    setError?: Function
}