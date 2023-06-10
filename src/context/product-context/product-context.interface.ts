import { Product } from "../../shared/models/product.interface";

export interface IProductContext {
    products:any,
    productDetails:any,
    selectProduct:  string,
    loading: boolean,
    error: boolean | null,
    setProducts?: Function,
    setSelectProduct: Function,
    setLoading?: Function,
    setError?: Function
}