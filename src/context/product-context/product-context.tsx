import { ReactNode, createContext, useState, useContext } from 'react';
import { IProductContext } from "./product-context.interface";
import { Product } from '../../shared/models/product.interface';
import { useFetch } from '../../hooks/useFetchNex';
import { productDetailsUrl, productsByCategoryUrl } from '../../shared/urls/url';

const ProductContext = createContext<IProductContext>({
    selectProduct: '',
    loading: false,
    error: false,
    setSelectProduct:()=>{},
    products:[],
    productDetails:[]
});

export const ProductProvider = ({ children, selectedCategory }: {children: ReactNode, selectedCategory:string}) => {
    const [selectProduct, setSelectProduct] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(false);

    const {response:products,error}=useFetch(productsByCategoryUrl(selectedCategory),null, [selectedCategory])
    const {response:productDetails,error:productDetailError}=useFetch(productDetailsUrl(selectProduct),null, [selectProduct])

    const values = {
        products,
        selectProduct,
        loading,
        productDetails,
        error,
        setSelectProduct,
        setLoading,
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);