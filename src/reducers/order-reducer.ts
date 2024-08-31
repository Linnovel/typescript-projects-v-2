import { MenuItem, OrderItem } from "../projects/CalcuPropinas/types";





export type OrderActions = 
{type: 'add-item' ,payload: {item: MenuItem}}  |
{type: 'remove-item', payload: {id: MenuItem['id']}}  |
{type: 'place-order'} |
{type: 'add-tip', payload: {value: number}}

export type OrderState = {
    order: OrderItem[],
    tip: number
};

export const intialStatePropinas : OrderState = {
    order: [],
    tip: 0
};


export const orderReducer = (
    state: OrderState = intialStatePropinas,
    action: OrderActions
    ) => {

        if(action.type === 'add-item'){
            const itemExist = state.order.find(orderedItem => orderedItem.id === action.payload.item.id);
            let order : OrderItem[] = []
            if(itemExist){
                order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
            } else {
                const newItem : OrderItem = {...action.payload.item, quantity: 1}
                order = [...state.order, newItem]
            } 
            return {
                ...state,
                order
            }
        } // end add-item



        if(action.type === 'remove-item'){
             const updatedOrder = (state.order.filter(item => item.id !== action.payload.id))
            return {
                ...state,
                order: updatedOrder
            }
        } // end remove-item



        if(action.type === 'place-order'){
           
            return {
                ...state,
                order: [],
                tip: 0
            }
        } // end place order



        if(action.type === 'add-tip'){
            const tip = action.payload.value
            return {
                ...state,
                tip
            }
        } // end add-tip



        return state
}


