import { OrderActions } from "../../../reducers/order-reducer";
import type { MenuItem } from "../types";
import { Dispatch } from "react";

type MenuItemsProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};
const MenuItem = ({ item, dispatch }: MenuItemsProps) => {
  return (
    <button
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
      className=" border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
      <p>{item.name}</p>
      <p className="font-black">Price: ${item.price}</p>
    </button>
  );
};

export default MenuItem;
