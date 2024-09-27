'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    checkAuthentication: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const API_URL = 'http://localhost:3010';

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

    useEffect(() => {

        if (!checkCalled.current) {
            checkCalled.current = true;
            checkAuthentication();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, checkAuthentication, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
