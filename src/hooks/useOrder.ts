import { useState } from "react"
import type { MenuItem, OrderItem } from "../projects/CalcuPropinas/types"; 


export default function useOrder(){

const [order, setOrder] = useState<OrderItem[]>([]);
const [tip, setTip] = useState(0);


const addItem = (item: MenuItem) => {
    // console.log('agregando...', item);
    const itemExist = order.find(orderedItem => orderedItem.id === item.id);
    if(itemExist){
       const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
       setOrder(updatedOrder)
    } else {
        const newItem : OrderItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    } 
}

const placeOrder = () => {
    // console.log('guardando');
    setOrder([]);
    setTip(0);
    
}

const removeOrder = (id: MenuItem['id']) => {
// console.log('eliminando', id);
setOrder(order.filter(item => item.id !== id))





};



    return {
        order,
        tip,
        setTip,
        addItem,
        removeOrder,
        placeOrder
    }
}