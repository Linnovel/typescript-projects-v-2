import MenuItem from "../components/MenuItem";
import { menuItems } from "../datadb/data";
import OrderContent from "../components/OrderContent";
import OrderTotal from "../components/OrderTotal";
import TipPercentageForm from "../components/TipPercentageForm";
import { useReducer } from "react";
import {
  intialStatePropinas,
  orderReducer,
} from "../../../reducers/order-reducer";

const CalcuApp = () => {
  //dispatch son las acciones
  //state es para acceder a ese estado
  const [state, dispatch] = useReducer(orderReducer, intialStatePropinas);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black ">
          Calculara de propinas y consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div>
          <div className="space-y-3 p-5">
            <h2 className=" text-4xl font-black">Menú</h2>
            {menuItems.map((items) => (
              <MenuItem key={items.id} item={items} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContent order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} tip={state.tip} />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={() => dispatch({ type: "place-order" })}
              />
            </>
          ) : (
            <p className="text-center font-bold"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
};

export default CalcuApp;
