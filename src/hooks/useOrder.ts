import { useState } from "react"
import type {  OrderItem } from "../projects/CalcuPropinas/types"; 


export default function useOrder(){

const [order, setOrder] = useState<OrderItem[]>([]);
const [tip, setTip] = useState(0);




const placeOrder = () => {
    // console.log('guardando');

    
}



    return {
        order,
        tip,
        setTip,
        placeOrder
    }
}