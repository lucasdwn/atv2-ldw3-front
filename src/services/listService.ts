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

    async buscarLista(listaId: string): Promise<ILista> {
        return await apiService.makeRequest(`/lista/get/${listaId}`, {
            method: 'GET',
        });
    },

    async updateLista(listaId: string, lista: ILista): Promise<ILista> {
        return await apiService.makeRequest(`/lista/update/${listaId}`, {
            method: 'PUT',
            body: JSON.stringify(lista),
        });
    },

    async deleteLista(listaId: string): Promise<ILista> {
        return await apiService.makeRequest(`/lista/delete/${listaId}`, {
            method: 'DELETE',
        });
    },
};
