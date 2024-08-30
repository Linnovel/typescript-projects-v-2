import { useState, ChangeEvent, FormEvent, Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";

import { categories } from "../datadb/categories";
import { Activity } from "../types";
// import { Category } from "../types/index";
import { ActivityActions } from "../../reducers/activityReducer";

type formProps = {
  dispatch: Dispatch<ActivityActions>;
};

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: "",
  calories: 0,
};

const Form = ({ dispatch }: formProps) => {
  const [activity, setActivity] = useState<Activity>(initialState);

  const handleOnChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    setActivity({
      ...activity,
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "save-activity", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidv4(),
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white shadow p-10 rounded-lg"
      >
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
          className="bg-gray-800 cursor-pointer hover:bg-gray-900 w-full p-2 font-bold uppercase text-white disabled:opacity-10"
          type="submit"
          value={
            activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"
          }
          disabled={!isValidActivity()}
        />
      </form>
    </>
  );
};

export default Form;
