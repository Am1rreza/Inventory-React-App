import { useState } from "react";

const CategoryForm = () => {
  const [isShow, setIsShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  // Handlers
  const cancelFormHandler = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();

    if (!categoryFormData.title || !categoryFormData.description)
      return alert("Please fill the form !");

    const newCategory = {
      ...categoryFormData,
      createdAt: new Date().toISOString(),
    };

    setCategories([...categories, newCategory]);

    setCategoryFormData({
      title: "",
      description: "",
    });

    setIsShow(false);
  };

  return (
    <section>
      <div className={`mb-4 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-lg flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              Title
            </label>
            <input
              value={categoryFormData.title}
              onChange={changeHandler}
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded border border-slate-500 text-slate-400"
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              Description
            </label>
            <textarea
              value={categoryFormData.description}
              onChange={changeHandler}
              name="description"
              id="category-description"
              className="bg-transparent rounded border border-slate-500 text-slate-400 resize-none w-full"
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              onClick={cancelFormHandler}
              id="cancel-add-category"
              className="flex-1 border border-slate-400 text-slate-300 rounded-md py-2"
            >
              Cancel
            </button>
            <button
              onClick={addNewCategoryHandler}
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-md py-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        onClick={() => setIsShow(!isShow)}
        id="toggle-add-category"
        className={`text-slate-500 font-medium text-lg mb-4 ${
          isShow && "hidden"
        }`}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default CategoryForm;
