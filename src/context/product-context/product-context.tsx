import { ReactNode, createContext, useState, useContext } from 'react';
import { IProductContext } from "./product-context.interface";
import { Product } from '../../shared/models/product.interface';

const ProductContext = createContext<IProductContext>({
    products: [],
    selectProduct: null,
    loading: false,
    error: false
});

export const ProductProvider = ({ children }: {children: ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectProduct, setSelectProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const values = {
        products,
        selectProduct,
        loading,
        error,
        setProducts,
        setSelectProduct,
        setLoading,
        setError
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);