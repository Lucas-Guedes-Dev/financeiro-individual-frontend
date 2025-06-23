export interface ExpenseReponse {
    description: string
    id: string
    name: string
    user: string
}

export interface ExpenseCreate {
    name: string
    description: string
}