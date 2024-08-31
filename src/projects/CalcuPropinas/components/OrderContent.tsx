import { formatCurrency } from "../../../helpers";
import { OrderActions } from "../../../reducers/order-reducer";
import { MenuItem, OrderItem } from "../types";
import { Dispatch } from "react";

type orderContentProps = {
  order: OrderItem[];
  dispatch: Dispatch<OrderActions>;
};

const OrderContent = ({ order, dispatch }: orderContentProps) => {
  return (
    <>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center"> La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b "
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch({ type: "remove-item", payload: { id: item.id } })
                  }
                  className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default OrderContent;
