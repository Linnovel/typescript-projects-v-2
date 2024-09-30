import { Outlet } from "react-router-dom";
import HeaderDrink from "../components/HeaderDrink";

const LayoutDrink = () => {
  return (
    <>
      <HeaderDrink />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
    </>
  );
};

export default LayoutDrink;
