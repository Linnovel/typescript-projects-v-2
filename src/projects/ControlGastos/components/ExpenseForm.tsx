import { categories } from "../data/categoryGastos";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ExpenseForm = () => {
  return (
    <>
      <form className="space-y-5" action="">
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 ">
          Nuevo Gastos
        </legend>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Nombre Gasto:
          </label>
          <input
            type="text"
            id="expenseName"
            className="bg-slate-100 p-2"
            name="expenseName"
            placeholder="Añade el nombre del gasto"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xl">
            Cantidad:
          </label>
          <input
            type="number"
            id="amount"
            className="bg-slate-100 p-2"
            name="expenseName"
            placeholder="Añade la cantidad del gasto: ej. 300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xl">
            Categoria:
          </label>
          <select id="category" className="bg-slate-100 p-2" name="category">
            <option value="">--Seleccione--</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="datePicker" className="text-xl">
            Fecha Gastos:
          </label>
          <DatePicker className="bg-slate-100 p-2 border-0" />
        </div>
        <input
          value={"Registrar Gastos"}
          type="submit"
          className="bg-blue-600 cursor-pointer w-full p-2 uppercase text-white font-bold rounded-lg"
        />
      </form>
    </>
  );
};

export default ExpenseForm;
