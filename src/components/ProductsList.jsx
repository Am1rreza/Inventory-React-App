const ProductsList = ({ products, categories }) => {
  const getCategoryTitle = (categoryId) => {
    return categories.find((c) => c.id === parseInt(categoryId)).title;
  };

  if (!products.length) {
    return (
      <>
        <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>
        <h2 className="text-xl text-slate-300 mt-8 text-center">
          There is no products !
        </h2>
        <br />
      </>
    );
  }

  return (
    <>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>
      {products.map((product) => {
        return (
          <div
            className="flex items-center justify-between mb-4"
            key={product.id}
          >
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-xl">
                {getCategoryTitle(product.categoryId)}
              </span>

              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300">
                {product.quantity}
              </span>
              <button className="delete-product border px-3 py-0.5 rounded-xl border-red-400 text-red-400 text-sm">
                delete
              </button>
            </div>
          </div>
        );
      })}
      <br />
    </>
  );
};

export default ProductsList;
