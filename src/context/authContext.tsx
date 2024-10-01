'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    checkAuthentication: () => void;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (nome: string, email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const API_URL = process.env.NEXT_PUBLIC_API_URL_PRODUCAO;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const checkCalled = useRef<boolean>(false);
    const router = useRouter();

    const refreshAccessToken = async (refreshToken: string) => {
        try {
            const response = await fetch(`${API_URL}/auth/refresh-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ refreshToken }),
            });
            if (response.ok) {
                const { token, refreshToken: newRefreshToken } = await response.json();
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', newRefreshToken);
                return true;
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
        }
        return false;
    };

    const checkAuthentication = async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        const refreshToken = localStorage.getItem('refreshToken');

        if (!token) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/auth/validate-token`, {
                method: 'GET',
                headers: { Authorization: `${token}` },
            });

            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                if (refreshToken) {
                    const refreshed = await refreshAccessToken(refreshToken);
                    setIsAuthenticated(refreshed);
                } else {
                    setIsAuthenticated(false);
                }
            }
        } catch (error) {
            console.error('Error validating token:', error);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        setIsAuthenticated(false);
        router.push('/');
    };

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha: password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw {
                    message: errorData.message,
                    error: errorData.error
                }
            }
            const { token, refreshToken, usuario } = await response.json();
            localStorage.setItem('token', token);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            localStorage.setItem('refreshToken', refreshToken);
            setIsAuthenticated(true);
        } catch (error: any) {
            throw {
                message: error.message,
                error: error.error
            }
        }
    };

    const register = async (nome: string, email: string, password: string): Promise<void> => {
        try {
            const response = await fetch(`${API_URL}/usuario/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, senha: password }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw {
                    message: errorData.message,
                    error: errorData.error
                }
            }
            const { token, refreshToken, usuario } = await response.json();
            localStorage.setItem('token', token);
            localStorage.setItem('usuario', JSON.stringify(usuario));
            localStorage.setItem('refreshToken', refreshToken);
            setIsAuthenticated(true);
        } catch (error: any) {
            throw {
                message: error.message,
                error: error.error
            }
        }
    };

    useEffect(() => {
        if (!checkCalled.current) {
            checkCalled.current = true;
            checkAuthentication();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, checkAuthentication, logout, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};
