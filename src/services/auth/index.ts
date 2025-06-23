import api from "../api";
import type { AuthResponse } from "./types";

class Auth {

    async Login(username: string, password: string): Promise<boolean> {
        const response = await api.post<AuthResponse>('/login', {
            username,
            password,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        localStorage.setItem('token', response.data.access_token);

        return true;
    };
}

export default Auth;