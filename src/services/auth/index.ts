import api from "../api";
import type { AuthResponse } from "./types";

class Auth {

    async Login(username: string, password: string) {
        const response = await api.post<AuthResponse>('/login', {
            username,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        return response;
    };
}

export default Auth;