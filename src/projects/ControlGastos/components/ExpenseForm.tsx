import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { categories } from "../data/categoryGastos";
import DatePicker from "react-date-picker";
import { ChangeEvent, useEffect, useState } from "react";
import { DraftExpense, Value } from "../typesBudget";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

const ExpenseForm = () => {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });

  const [error, setError] = useState("");
  const [previewAmount, setPreviewAmount] = useState(0);
  const { dispatch, state, remainingBudget } = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];
      setExpense(editingExpense);
      setPreviewAmount(editingExpense.amount);
    }
  }, [state.editingId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? Number(value) : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validar

    if (Object.values(expense).includes("")) {
      setError("todos los campons son obligatorios");
      return;
    }

    //no pase del limite
    if (expense.amount > remainingBudget) {
      setError("Se sale del presupuesto");
      return;
    }

    // Agregar un nuevo gasto
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }

    //reiniciar el estate
    setExpense({
      amount: 0,
      expenseName: "",
      category: "",
      date: new Date(),
    });
    setPreviewAmount(0);
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2 ">
          {state.editingId ? "Guardar Cambios" : "Nuevo Gastos"}
        </legend>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Nombre Gasto:
          </label>
          <input
            type="text"
            id="expenseName"
            className="bg-slate-100 p-2 rounded-lg"
            name="expenseName"
            value={expense.expenseName}
            onChange={handleChange}
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
            className="bg-slate-100 p-2 rounded-lg"
            name="amount"
            value={expense.amount}
            onChange={handleChange}
            placeholder="Añade la cantidad del gasto: ej. 300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-xl">
            Categoria:
          </label>
          <select
            id="category"
            className="bg-slate-100 rounded-lg p-2"
            name="category"
            value={expense.category}
            onChange={handleChange}
          >
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
          <DatePicker
            value={expense.date}
            className="bg-slate-100 rounded-lg p-2 border-0"
            onChange={handleChangeDate}
          />
        </div>
        <input
          value={state.editingId ? "Guardar Cambios" : "Registrar Gasto"}
          type="submit"
          className="bg-blue-600  cursor-pointer w-full p-2 uppercase text-white font-bold rounded-lg"
        />
      </form>
    </>
  );
};

export default ExpenseForm;
