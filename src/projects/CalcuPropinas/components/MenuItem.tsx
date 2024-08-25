import type { MenuItem } from "../types";

type MenuItemsProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};
const MenuItem = ({ item, addItem }: MenuItemsProps) => {
  return (
    <button
      onClick={() => addItem(item)}
      className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
      <p>{item.name}</p>
      <p className="font-black">Price: ${item.price}</p>
    </button>
  );
};

export default MenuItem;
