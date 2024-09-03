import { useMemo } from "react";
import { formatDate } from "../helpers";
import { ExpensesBudget } from "../typesBudget";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categoryGastos";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

type ExpenseDetailProps = {
  expense: ExpensesBudget;
};

const ExpenseDetail = ({ expense }: ExpenseDetailProps) => {
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense]
  );

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => {}}>Actualizar</SwipeAction>
    </LeadingActions>
  );

  const trailiongActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => {}}>Eliminar</SwipeAction>
    </TrailingActions>
  );

  return (
    <>
      <SwipeableList>
        <SwipeableListItem
          maxSwipe={30}
          leadingActions={leadingActions()}
          trailingActions={trailiongActions()}
        >
          <div className="bg-white flex gap-5 items-center shado-lg p-10 w-full border-b border-gray-200">
            <div>
              <img
                src={`/icono_${categoryInfo.icon}.svg `}
                alt="icono gasto"
                className="w-20"
              />
            </div>
            <div className="flex-1 space-y-2">
              <p className="text-sm font-bold text-slate-500">
                {categoryInfo.icon}
              </p>
              <p>{expense.expenseName}</p>
              <p className="text-slate-600 text-sm">
                {formatDate(expense.date!.toString())}
              </p>
            </div>
            <AmountDisplay amount={expense.amount} />
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </>
  );
};

export default ExpenseDetail;
