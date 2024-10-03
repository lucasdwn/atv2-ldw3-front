'use client';
import { apiService } from './apiService';
import { IOrdenacao, IRealizadoEm, ITarefa } from '@/interfaces/ITarefa';

export const taskService = {
    async atualizarOrdenacao(listaId: string, ordenacao: IOrdenacao[]): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa/updateOrdenacao?listaId=${listaId}`, {
            method: 'PUT',
            body: JSON.stringify({ ordensAtualizadas: ordenacao }),
        });
    },

    async atualizarRealizadoEm(listaId: string, realizadoEm: IRealizadoEm): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa/updateRealizadoEm?listaId=${listaId}`, {
            method: 'PUT',
            body: JSON.stringify({ realizadaoEmAtualizado: realizadoEm }),
        });
    },

    async deleteTarefa(listaId: string, tarefaId: string): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa/delete/${tarefaId}?listaId=${listaId}`, {
            method: 'DELETE',
        });
    },

    async getPrioridades(search?: string, limit?: number) {
        const query = new URLSearchParams();
        if (search) query.append('search', search);
        if (limit) query.append('limit', String(limit));

        return await apiService.makeRequest(`/prioridade/list?${query.toString()}`, {
            method: 'GET',
        });
    },

};
