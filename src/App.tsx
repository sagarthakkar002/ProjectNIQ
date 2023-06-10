import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Home from "./pages/home/home";
import ProductDetails from "./pages/product-details/productDetails";
import { ProductComparision } from "./pages/comparision/components/product-camparision";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="comparison" element={<ProductComparision />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
