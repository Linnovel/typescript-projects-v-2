import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const HeaderDrink = () => {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <>
      <header
        className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
      >
        <div className="mx-auto container px-5 py-16">
          <div className="flex justify-between items-center">
            <div>
              <img
                src="../../../../public/logo.svg"
                className="w-32"
                alt="logo"
              />
            </div>
            <nav className="flex gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold"
                    : "text-white uppercase font-bold"
                }
                to="/"
              >
                Inicio
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 uppercase font-bold"
                    : "text-white uppercase font-bold"
                }
                to="/favoritos"
              >
                Favoritos
              </NavLink>
            </nav>
          </div>
          {isHome && (
            <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
              <div className="space-y-4 ">
                <label
                  className="block text-white uppercase font-extrabold text-lg"
                  htmlFor="ingredient"
                >
                  Nombre o ingredientes
                </label>
                <input
                  className="p-3 w-full rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Nombre o ingrediente. Ej. Vodka, Tequila"
                  name="ingredient"
                  id="ingredient"
                />
              </div>
              <div className="space-y-4 ">
                <label
                  className="block text-white uppercase font-extrabold text-lg"
                  htmlFor="category"
                >
                  Categoria
                </label>
                <select
                  className="p-3 w-full rounded-lg focus:outline-none"
                  name="category"
                  id="category"
                >
                  {" "}
                  <option value="">--Seleccione --</option>
                </select>
              </div>
              <input
                type="submit"
                value="Buscar Recetas"
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 uppercase rounded-lg"
              />
            </form>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderDrink;
