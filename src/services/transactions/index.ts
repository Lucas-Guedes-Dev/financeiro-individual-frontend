import api from "../api"
import type { CreateTransaction, SummaryCategoryInfo, SummaryDREInfo, SummaryInfo, SummaryMonthlyInfo, TransactionResponse } from "./types";

class Transactions {
    async create(data: CreateTransaction): Promise<boolean> {
        const request = await api.post('/Transaction', data);

        if (request.status === 200 || request.status === 201) {
            return true;
        }

        return false;
    }

    async getAll(): Promise<TransactionResponse[]> {
        const request = await api.get<TransactionResponse[]>('/Transaction/All');

        return request.data;
    }

    async getById(id: string): Promise<TransactionResponse> {
        const request = await api.get<TransactionResponse>(`/Transaction/${id}`);

        return request.data;
    }

    async update(id: string, data: CreateTransaction): Promise<boolean> {
        const request = await api.put(`/Transaction/${id}`, data);

        if (request.status === 200 || request.status === 201) {
            return true;
        }

        return false;
    }

    async delete(id: string): Promise<boolean> {
        const request = await api.delete(`/Transaction/${id}`);

        if (request.status === 200 || request.status === 201) {
            return true;
        }

        return false;
    }

    async getSummary(): Promise<SummaryInfo> {
        const request = await api.get<SummaryInfo>(`/Transaction/Summary`);

        return request.data;
    }

    async getMonthlySummary(): Promise<SummaryMonthlyInfo[]> {
        const request = await api.get<SummaryMonthlyInfo[]>(`/Transaction/Monthly/Summary`);

        return request.data;
    }

    async getCategorySummary(): Promise<SummaryCategoryInfo[]> {
        const request = await api.get<SummaryCategoryInfo[]>(`/Transaction/Category/Summary`);

        return request.data;
    }

    async getDRESummary(): Promise<SummaryDREInfo[]> {
        const request = await api.get<SummaryDREInfo[]>(`/Transaction/DRE/Summary`);

        return request.data;
    }
}

export default Transactions;