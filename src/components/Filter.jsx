const Filter = ({ sort, search, onSort, onSearch }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6 mt-8">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          value={search}
          onChange={onSearch}
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
          onChange={onSort}
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded"
          value={sort}
        >
          <option className="bg-slate-500 text-slate-300" value="latest">
            Latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            Earliest
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
