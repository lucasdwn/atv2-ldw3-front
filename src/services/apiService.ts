const API_URL = process.env.API_URL || 'http://192.168.1.36:3010';

export const apiService = {
    getToken: (): string | null => localStorage.getItem('token'),
    getRefreshToken: (): string | null => localStorage.getItem('refreshToken'),

    async makeRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
        const token = this.getToken();

        const headers = {
            ...options.headers,
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        };

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                ...options,
                headers,
            });

            if (response.status === 401) {

                const newTokens = await this.refreshToken();
                if (newTokens) {

                    return this.makeRequest(endpoint, options);
                }
            }

            return response.json();
        } catch (err) {
            console.error('Erro ao fazer requisição:', err);
            throw err;
        }
    },

    async refreshToken(): Promise<any | null> {
        const refreshToken = this.getRefreshToken();

        if (!refreshToken) {
            console.error('Nenhum refresh token disponível');
            return null;
        }

        try {
            const response = await fetch(`${API_URL}/auth/refresh-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);

                return data;
            } else {
                console.error('Erro ao atualizar o token');
                return null;
            }
        } catch (err) {
            console.error('Erro ao fazer requisição de refresh token:', err);
            return null;
        }
    },
};
