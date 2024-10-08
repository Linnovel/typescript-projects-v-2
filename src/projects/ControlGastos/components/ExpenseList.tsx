import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseList = () => {
  const { state } = useBudget();

  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  return (
    <>
      <div>
        {isEmpty ? (
          <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
        ) : (
          <>
            <p className="text-gray-600 text-2xl font-bold my-5">
              Listado de Gastos.
              {state.expenses.map((expense) => (
                <ExpenseDetail key={expense.id} expense={expense} />
              ))}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
