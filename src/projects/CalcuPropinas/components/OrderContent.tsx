import { formatCurrency } from "../../../helpers";
import { MenuItem, OrderItem } from "../types";

type orderContentProps = {
  order: OrderItem[];
  removeOrder: (id: MenuItem["id"]) => void;
};

const OrderContent = ({ order, removeOrder }: orderContentProps) => {
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
                  onClick={() => removeOrder(item.id)}
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
