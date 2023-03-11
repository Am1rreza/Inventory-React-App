const ProductForm = ({ categories }) => {
  return (
    <div className="">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            Product Title
          </label>
          <input
            type="text"
            name="product-title"
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
            type="number"
            name="product-quantity"
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
            name="product-category"
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
