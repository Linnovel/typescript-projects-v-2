import { categories } from "../data/categoryGastos";

const FilterByCategory = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-10">
        <form action="">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <label htmlFor="category"></label>
            <select className="bg-slate-100 p-3 flex rounded" id="category">
              <option value=""> --Todas las Categorias</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilterByCategory;
