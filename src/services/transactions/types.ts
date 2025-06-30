export interface CreateTransaction {
    type: string
    amount: number
    category: string
    description: string
    date: string
    bank_account_id: string
}

export interface TransactionResponse {
    id: string
    user: string
    type: string
    amount: number
    category: string
    description: string
    date: string
    bank_account_id: string
}
