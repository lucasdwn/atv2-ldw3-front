const API_URL = process.env.NEXT_PUBLIC_API_URL_PRODUCAO;

export const apiService = {
    getToken: (): string | null => localStorage.getItem('token'),
    getRefreshToken: (): string | null => localStorage.getItem('refreshToken'),

    async makeRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
        const token = this.getToken();

        const headers = {
            ...options.headers,
            Authorization: token ? `${token}` : '',
        };

        const isFormData = options.body instanceof FormData;

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                ...options,
                headers: {
                    ...headers,
                    ...(isFormData ? {} : { 'Content-Type': 'application/json' })
                },
            });

            if (response.status === 401) {
                const newTokens = await this.refreshToken();
                if (newTokens) {
                    return this.makeRequest(endpoint, options);
                }
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw {
                    message: errorData.message,
                    error: errorData.error
                }
            }

            return response.json();
        } catch (err: any) {
            throw {
                message: err.message,
                error: err.error
            }
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
                const errorData = await response.json();
                console.error('Erro ao atualizar o token:', errorData.message || 'Erro desconhecido');
                return null;
            }
        } catch (err) {
            console.error('Erro ao fazer requisição de refresh token:', err);
            return null;
        }
    },
};
