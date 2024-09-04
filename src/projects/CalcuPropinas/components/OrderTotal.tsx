import { Dispatch, useCallback } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../../../helpers";
import { OrderActions } from "../../../reducers/order-reducer";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  dispatch: Dispatch<OrderActions>;
};

const OrderTotal = ({ order, tip, dispatch }: OrderTotalProps) => {
  const subTotalAmount = useCallback(
    () =>
      order.reduce(
        (total, element) => total + (element.quantity + element.price),
        0
      ),
    [order]
  );

  const tipAmount = useCallback(() => subTotalAmount() * tip, [tip, order]);
  const totalAmount = useCallback(
    () => subTotalAmount() + tipAmount(),
    [tip, order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas:</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{subTotalAmount()}</span>
        </p>
        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button
        className="font-bold disabled:opacity-10 mt-10 w-full bg-black p-3 uppercase text-white "
        disabled={totalAmount() === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Guardar Orden
      </button>
    </>
  );
};

export default OrderTotal;
