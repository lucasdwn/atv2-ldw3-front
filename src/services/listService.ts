'use client';
import { apiService } from './apiService';
import { ILista } from '../interfaces/ILista';

export const listService = {
    async createLista(lista: ILista): Promise<ILista> {
        return await apiService.makeRequest('/lista/', {
            method: 'POST',
            body: JSON.stringify(lista),
        });
    },

    async getTipoListas(search?: string, limit?: number) {
        const query = new URLSearchParams();
        if (search) query.append('search', search);
        if (limit) query.append('limit', String(limit));

        return await apiService.makeRequest(`/tipoLista/list?${query.toString()}`, {
            method: 'GET',
        });
    },
};
