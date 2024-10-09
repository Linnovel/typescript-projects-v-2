import { Outlet } from "react-router-dom";
import HeaderDrink from "../components/HeaderDrink";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";
import Notification from "../components/Notification";


const LayoutDrink = () => {

 const loadFromStorage = useAppStore((state) => state.loadFromStorage)
 const notification = useAppStore((state) => state.notification)

  useEffect(() => {
    loadFromStorage()
  },[])


  return (
    <>
      <HeaderDrink />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification/>
    </>
  );
};

export default LayoutDrink;
