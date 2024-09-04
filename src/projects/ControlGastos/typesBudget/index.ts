export type ExpensesBudget = {
    id: string,
    expenseName:string,
    amount: number,
    category: string,
    date: Value,
}

export type DraftExpense = Omit<ExpensesBudget, 'id'>


type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type CategoryBudget = {
    id:string,
    name:string,
    icon:string

}