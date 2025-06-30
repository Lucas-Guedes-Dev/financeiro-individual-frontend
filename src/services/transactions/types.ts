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
    bank_account_info: BankAccountInfo
}

export interface BankAccountInfo {
    account_number: string
    balance: number
    bank_name: string
    id: string
    user_id: string
}

export interface SummaryInfo {
    quantidade_registros: number
    saldo_total: number
    entradas: number
    saidas: number
    saldos: number
}

export interface SummaryMonthlyInfo {
    name: string,
    Entradas: number,
    Saidas: number,
    saldo: number
}

export interface SummaryCategoryInfo {
    categoria: string,
    valor: number
}

export interface SummaryDREInfo {
    name: string
    start: number
    duration: number
    role: string
}