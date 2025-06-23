import api from "../api";
import type { ExpenseCreate, ExpenseReponse } from "./types";

class Expenses {

    async getAll(): Promise<ExpenseReponse> {
        const request = await api.get('Expense/All')

        return request.data;
    }

    async create(data: ExpenseCreate): Promise<boolean> {
        try {
            const request = await api.post('/Expense', data);
            if (request.status === 200) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}

export default Expenses