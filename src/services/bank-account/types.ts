export interface BankAcountCreate {
    bank_name: string
    account_number: string
    balance: number
}

export interface BankAccountResponse {
    account_number: string
    balance: string
    bank_name: string
    id: string
    user_id: string
}