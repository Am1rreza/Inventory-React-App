import "./App.css";
import NavBar from "./components/NavBar";
import CategoryForm from "./components/Category.jsx";
import ProductForm from "./components/Products";
import { useEffect, useState } from "react";
import ProductsList from "./components/ProductsList";
import Filter from "./components/Filter";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue]);

  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortDate = (array) => {
    let sorttedProducts = [...array];

    return sorttedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

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
          <Filter
            sort={sort}
            search={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
          />
          <ProductsList
            setProducts={setProducts}
            products={filteredProducts}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
