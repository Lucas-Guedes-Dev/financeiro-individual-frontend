export interface CreateTransaction {
    type: string
    amount: number
    category_id: string
    description: string
    date: string
}

export interface TransactionResponse {
    id: string
    user: string
    type: string
    amount: number
    category_id: string
    description: string
    date: string
}
