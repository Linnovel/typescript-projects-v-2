import {v4 as uuidv4} from 'uuid'
import { DraftExpense, ExpensesBudget } from "../typesBudget";
import { Category } from '../../ContadorCalorias/types';


export type BudgetActions = 
{type: 'add-budget', payload:{budget: number}} |
{type: 'show-modal'} |
{type: 'hide-modal'} |
{type: 'add-expense', payload:{ expense: DraftExpense}}|
{type: 'remove-expense', payload:{id: ExpensesBudget['id']}}|
{type: 'get-expense-by-id', payload: {id: ExpensesBudget['id']}}|
{type: 'update-expense', payload: {expense: ExpensesBudget}} |
{type: 'reset-expense'} | 
{type: 'add-filter-category', payload:{id: Category['id']}}


export type BudgetState  ={
    budget: number,
    modal: boolean,
    expenses: ExpensesBudget[],
    editingId: ExpensesBudget['id'],
}

const initialBudget = ():number => {
    const localStorageBuget = localStorage.getItem('budget')
    return localStorageBuget ? +localStorageBuget : 0
}

const localStorageExpenses = ():ExpensesBudget[] => {
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses): []
}

export const initialBugetState : BudgetState = {
    budget: initialBudget(),
    modal: false,
    expenses: localStorageExpenses(),
    editingId: '',
}; 

const createExpense = (draftExpense: DraftExpense) : ExpensesBudget => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

export const budgetReducer = (
    state: BudgetState = initialBugetState,
    action: BudgetActions

    ) => {
        if(action.type === 'add-budget'){
            return {
                ...state,
                budget: action.payload.budget
            }
        }

        if(action.type === 'show-modal'){
            return {
                ...state,
                modal: true
            }
        }

        if(action.type === 'hide-modal'){
            return {
                ...state,
                modal:false,
                editingId: ''
            }
        }


        if(action.type === 'add-expense'){
            const expense = createExpense(action.payload.expense)
            return {
                ...state,
                expenses: [...state.expenses, expense],
                modal: false
            }
        }

        if(action.type ==='remove-expense'){
            return {
                ...state,
                expenses: state.expenses.filter( expense => expense.id != action.payload.id)
            }
        }
        if(action.type === 'get-expense-by-id'){

            return {
                ...state,
                editingId: action.payload.id,
                modal:true
            }
        }

        if(action.type==='update-expense'){
            return {
                ...state,
                expense: state.expenses.map( expense => expense.id === action.payload.expense.id ? action.payload.expense : expense ),
                modal: false,
                editingId: ''
            }
        }

        if(action.type === 'reset-expense'){

            return {
                ...state,
                budget: 0,
                expenses: [],
                
            }
        }

        return state
}
