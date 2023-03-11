const CategoryForm = () => {
  return (
    <section>
      <div className="mb-4 hidden" id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
          <div>
            <label for="category-title" className="block mb-1 text-slate-400">
              Title
            </label>
            <input
              type="text"
              name="category-title"
              id="category-title"
              className="bg-transparent rounded border border-slate-500 text-slate-400"
            />
          </div>
          <div>
            <label
              for="category-description"
              className="block mb-1 text-slate-400"
            >
              Description
            </label>
            <textarea
              name="category-description"
              id="category-description"
              className="bg-transparent rounded border border-slate-500 text-slate-400 resize-none w-full"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              id="cancel-add-category"
              className="flex-1 border border-slate-400 text-slate-300 rounded-md py-2"
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-md py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className="text-slate-500 font-medium text-lg mb-4"
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
