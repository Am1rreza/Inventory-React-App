const NavBar = () => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
      <h1 className="text-xl font-bold text-slate-300">Inventory React App</h1>
      <span
        id="total-quantity"
        className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 font-bold"
      >
        0
      </span>
    </div>
  );
};

export default NavBar;
