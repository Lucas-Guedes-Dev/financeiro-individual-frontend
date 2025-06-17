import api from "../api";
import type { AuthResponse } from "./types";

class Auth {

    public Login = async (username: string, senha: string): Promise<AuthResponse> => {

        const request = await api.post<AuthResponse>('/login', { username: username, senha: senha })

        return request.data;
    }
}

export default Auth;