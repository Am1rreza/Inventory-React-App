const Filter = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 mt-8">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded"
        >
          <option className="bg-slate-500 text-slate-300" value="newest" selected>
            Newest
          </option>
          <option className="bg-slate-500 text-slate-300" value="oldest">
            Oldest
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
