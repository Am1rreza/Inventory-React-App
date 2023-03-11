import { useState } from "react";

const ProductForm = ({ categories }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: "1",
    categoryId: "",
  });
  const [products, setProducts] = useState([]);

  // Handlers
  const changeHandler = (e) => {
    setProductsFormData({
      ...productsFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewProductHandler = (e) => {
    e.preventDefault();

    if (!productsFormData.title || !productsFormData.categoryId)
      return alert("Please fill the form !");

    const newProduct = {
      ...productsFormData,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
    };

    setProducts([...products, newProduct]);

    setProductsFormData({
      title: "",
      quantity: "1",
      categoryId: "",
    });
  };

  return (
    <div className="">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            Product Title
          </label>
          <input
            value={productsFormData.title}
            onChange={changeHandler}
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            Quantity
          </label>
          <input
            value={productsFormData.quantity}
            onChange={changeHandler}
            type="number"
            name="quantity"
            id="product-quantity"
            className="bg-transparent rounded border border-slate-500 text-slate-400"
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            Category
          </label>
          <select
            value={productsFormData.categoryId}
            onChange={changeHandler}
            name="categoryId"
            id="product-category"
            className="w-full bg-transparent rounded border border-slate-500 text-slate-400"
          >
            <option className="bg-slate-500 text-slate-300" value="">
              Select a Category
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProductHandler}
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-md py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
      <br /> <br />
    </div>
  );
};

export default ProductForm;
