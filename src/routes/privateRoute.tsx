import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: React.ReactElement;
}

const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    return !!token && isTokenValid();
};

const isTokenValid = (): boolean => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const [, payload] = token.split(".");
        const decodedPayload = JSON.parse(atob(payload));
        const now = Math.floor(Date.now() / 1000);
        return decodedPayload.exp && decodedPayload.exp > now;
    } catch (error) {
        console.log(error)
        return false;
    }
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
    return isAuthenticated() ? children : <Navigate to="/login" />;
}
