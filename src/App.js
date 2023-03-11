import "./App.css";
import NavBar from "./components/NavBar";
import CategoryForm from "./components/Category.jsx";
import ProductForm from "./components/Products";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Milk",
    category: "Dairy",
    createdAt: "2023-03-11T15:35:58.482Z",
  },
  {
    id: 2,
    title: "Cheese",
    category: "Dairy",
    createdAt: "2023-03-11T15:36:08.475Z",
  },
  {
    id: 3,
    title: "Butter",
    category: "Dairy",
    createdAt: "2023-03-11T15:36:18.601Z",
  },
];

const categories = [
  {
    id: 1,
    title: "Dairy",
    createdAt: "2023-03-11T15:33:01.751Z",
  },
];

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="App">
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto px-4">
          <CategoryForm categories={categories} setCategories={setCategories} />
          <ProductForm categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
