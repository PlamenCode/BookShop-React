import { requestFactory } from './requester';

const baseUrl = 'http://localhost:4200/ReactDefance/auth';

export const authServiceFactory = (token) => {
    const request = requestFactory(token);
    return {
        login: (data) => request.get(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    };
}