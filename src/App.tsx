import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import ProductDetails from "./pages/product-details/productDetails";
import { ProductComparision } from "./pages/comparision/components/product-camparision";
import Header from "./shared/components/ui/Header";
import {
  useCategory,
} from "./context/category-context/category-context";
import { ProductProvider } from "./context/product-context/product-context";

function App() {
  const { selectedCategory } = useCategory();
  return (
    <div className="App">
      <ProductProvider selectedCategory={selectedCategory}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="product-details" element={<ProductDetails />} />
              <Route path="comparison" element={<ProductComparision />} />
            </Route>
          </Routes>
        </Router>
      </ProductProvider>
    </div>
  );
}

export default App;
