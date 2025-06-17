import api from "../api";
import type { BankAccountResponse, BankAcountCreate } from "./types";

class BankAcoount {
    async create(data: BankAcountCreate): Promise<boolean> {
        try {
            const request = await api.post('/BankAccount', data);
            if (request.status === 200) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async getAll(): Promise<BankAccountResponse[]> {
        const request = await api.get('/BankAccount/GetAll');

        return request.data;
    }
}

export default BankAcoount