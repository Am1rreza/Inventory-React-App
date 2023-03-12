import "./App.css";
import NavBar from "./components/NavBar";
import CategoryForm from "./components/Category.jsx";
import ProductForm from "./components/Products";
import { useState } from "react";
import ProductsList from "./components/ProductsList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products} />
        <div className="container max-w-screen-sm mx-auto px-4">
          <CategoryForm categories={categories} setCategories={setCategories} />
          <ProductForm
            products={products}
            setProducts={setProducts}
            categories={categories}
          />
          <ProductsList
            setProducts={setProducts}
            products={products}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
