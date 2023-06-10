import { ReactNode, createContext, useState, useContext } from 'react';
import { ICategoryContext } from "./category-context.interface";
import { Category } from '../../shared/models/category.inyterface';
import { useFetch } from '../../hooks/useFetchNex';
import { categoriesUrl } from '../../shared/urls/url';

const CategoryContext = createContext<ICategoryContext>({
    categories: [],
    error: false,
    selectedCategory:'',
    setSelectedCategory: ()=>{}

});

export const CategoryProvider = ({ children }: {children: ReactNode}) => {
    const [selectedCategory, setSelectedCategory] = useState<any>('');
    const {response:categories,error}=useFetch(categoriesUrl(),null,[])

    const values = {
        error,
        categories,
        setSelectedCategory,
        selectedCategory
    };

    return (
        <CategoryContext.Provider value={values}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => useContext(CategoryContext);
