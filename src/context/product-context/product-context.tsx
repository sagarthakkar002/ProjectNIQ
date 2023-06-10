import { ReactNode, createContext, useState, useContext } from 'react';
import { IProductContext } from "./product-context.interface";
import { useFetch } from '../../hooks/useFetchNex';
import { productDetailsUrl, productsByCategoryUrl } from '../../shared/urls/url';

const ProductContext = createContext<IProductContext>({
    products: [],
    selectProduct: '',
    productDetails: null
});

export const ProductProvider = ({ children, selectedCategory }: {children: ReactNode, selectedCategory: string}) => {
    const [selectProduct, setSelectProduct] = useState<string>('');

    const {response: products} = useFetch(productsByCategoryUrl(selectedCategory), null, [selectedCategory]);
    const {response: productDetails} = useFetch(productDetailsUrl(selectProduct), null, [selectProduct]);

    const values = {
        products: products || [],
        selectProduct,
        productDetails,
        setSelectProduct
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);