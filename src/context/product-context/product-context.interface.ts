import { Product } from "../../shared/models/product.interface";

export interface IProductContext {
    products: Product[],
    selectProduct: Product | null,
    loading: boolean,
    error: boolean,
    setProducts?: Function,
    setSelectProduct?: Function,
    setLoading?: Function,
    setError?: Function
}