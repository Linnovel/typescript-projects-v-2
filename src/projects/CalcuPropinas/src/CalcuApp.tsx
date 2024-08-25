import { MenuItems } from "../components/MenuItems";
import { menuItems } from "../datadb/data";

const CalcuApp = () => {
  console.log(menuItems);
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black ">
          Calculara de propinas y consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div>
          <h2 className="font-medium">Menú</h2>
          {menuItems.map((items) => (
            <MenuItems key={items.id} />
          ))}
        </div>
        <div>
          <h2 className="font-medium ">Consumo</h2>
        </div>
      </main>
    </>
  );
};

export default CalcuApp;
