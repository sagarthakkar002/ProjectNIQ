import { ReactNode, createContext, useState, useContext } from 'react';
import { ICategoryContext } from "./category-context.interface";
import { Category } from '../../shared/models/category.inyterface';

const CategoryContext = createContext<ICategoryContext>({
    categories: [],
    loading: false,
    error: false
});

export const CategoryProvider = ({ children }: {children: ReactNode}) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const values = {
        categories,
        loading,
        error,
        setCategories,
        setLoading,
        setError
    };

    return (
        <CategoryContext.Provider value={values}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => useContext(CategoryContext);
