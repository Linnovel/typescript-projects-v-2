import MenuItem from "../components/MenuItem";
import { menuItems } from "../datadb/data";
import useOrder from "../../../hooks/useOrder";
import OrderContent from "../components/OrderContent";
import OrderTotal from "../components/OrderTotal";
import TipPercentageForm from "../components/TipPercentageForm";

const CalcuApp = () => {
  const { order, tip, setTip, addItem, removeOrder, placeOrder } = useOrder();

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
              <MenuItem key={items.id} item={items} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContent order={order} removeOrder={removeOrder} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotal order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
};

export default CalcuApp;
