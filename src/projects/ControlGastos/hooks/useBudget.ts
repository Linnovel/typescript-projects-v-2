import {useContext} from 'react';
import { BudgetContext } from '../context/BudgetContect';


export const useBudget = () => {
    const context = useContext(BudgetContext);
    if(!context){
        throw new Error('usebudget no esta siendo usado')
    }
    return context
    
}