import { Outlet } from "react-router-dom";
import HeaderDrink from "../components/HeaderDrink";
import Modal from "../components/Modal";

const LayoutDrink = () => {
  return (
    <>
      <HeaderDrink />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
    </>
  );
};

export default LayoutDrink;
