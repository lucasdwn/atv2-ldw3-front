'use client';
import { apiService } from './apiService';
import { ILista } from '../interfaces/ILista';
import { ITipoLista } from '@/interfaces/ITipoLista';

export const listService = {
    async createLista(lista: ILista): Promise<ILista> {
        return await apiService.makeRequest('/lista/', {
            method: 'POST',
            body: JSON.stringify(lista),
        });
    },

    async getTipoListas(listaId: string, search?: string, limit?: number) {
        const query = new URLSearchParams();
        if (search) query.append('search', search);
        if (limit) query.append('limit', String(limit));
        query.append('listaId', listaId);

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

    async buscarTipoLista(tipoListaId: string): Promise<ITipoLista> {
        return await apiService.makeRequest(`/tipoLista/findOne/${tipoListaId}`, {
            method: 'GET',
        });
    },

    async createTipoLista(tipoLista: ITipoLista): Promise<ITipoLista> {
        return await apiService.makeRequest('/tipoLista/', {
            method: 'POST',
            body: JSON.stringify(tipoLista),
        });
    },

    async updateTipoLista(tipoListaId: string, tipoLista: ITipoLista): Promise<ITipoLista> {
        return await apiService.makeRequest(`/tipoLista/update/${tipoListaId}`, {
            method: 'PUT',
            body: JSON.stringify(tipoLista),
        });
    },

    async deleteTipoLista(tipoListaId: string): Promise<ITipoLista> {
        return await apiService.makeRequest(`/tipoLista/delete/${tipoListaId}`, {
            method: 'DELETE',
        });
    },

};
