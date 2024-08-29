import { useState, ChangeEvent } from "react";
import { categories } from "../datadb/categories";
import { Activity } from "../types";

const Form = () => {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleOnChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  return (
    <>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="gird grid-cols-1 gap-3">
          <label htmlFor="category" className="font-bold">
            Categoria:{" "}
          </label>
          <select
            value={activity.category}
            onChange={handleOnChange}
            id="category"
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:{" "}
          </label>

          <input
            value={activity.name}
            id="name"
            type="text"
            onChange={handleOnChange}
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej Comida, Jugo de Naranga, Ensalada, Ejercico"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorias:{" "}
          </label>

          <input
            value={activity.calories}
            id="calories"
            type="number"
            onChange={handleOnChange}
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Calorias ej. 300 - 500"
          />
        </div>
        <input
          className="bg-gray-800 cursor-pointer hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
          type="submit"
          value="Guardar comida o Guardar Ejercicio"
        />
      </form>
    </>
  );
};

export default Form;
