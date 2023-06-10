// import axios from 'axios'
import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { useFetch } from "../hooks/useFetch";

interface Product {
  category: string;
  description: string;
  id: Number;
  image: string;
  price: Number;
  rating: Object;
  title: string;
}

interface ProductContextValue {
  product: Object | {};
  productList: Array<Product>;
  productID: Number | null;
  category: string;
  setProductID: any;
  categories: Array<string>;
  setCategory: any;
  loading: Boolean | null;
}
const ProductContext = createContext<any>({
  product: null,
  productList: [],
  productID: null,
  category: "",
  setProductID: null,
  categories: [],
  setCategory: null,
  loading: null,
});

const url = "https://fakestoreapi.com";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export const ProductProvider = ({ children }: Props) => {
  const [category, setCategory] = useState('');
  const [productID, setProductID] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productDetailUrl, setProductDeatilUrl] = useState("");


  const { data: categories, error: categoriesError } = useFetch<[string]>(
    "https://fakestoreapi.com/products/categories"
  );
  const { data: productList, error: productsError } =
    useFetch<[Product]>(productUrl);

    const { data: product, error: productDetailError } =
    useFetch<any>(productDetailUrl);

  const values = {
    product,
    productList,
    productID,
    category,
    setProductUrl,
    setProductDeatilUrl,
    setProductID,
    categories,
    setCategory,
  };

  console.log({
    product,
    productList,
    productID,
    category,
    setProductUrl,
    setProductDeatilUrl,
    setProductID,
    categories,
    setCategory,
  })

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
