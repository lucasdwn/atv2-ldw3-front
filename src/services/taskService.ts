'use client';
import { apiService } from './apiService';
import { ILista } from '../interfaces/ILista';
import { IOrdenacao } from '@/interfaces/ITarefa';

export const taskService = {
    async atualizarOrdenacao(listaId: string, ordenacao: IOrdenacao[]): Promise<ILista> {
        return await apiService.makeRequest(`/tarefa/updateOrdenacao?listaId=${listaId}`, {
            method: 'PUT',
            body: JSON.stringify({ ordensAtualizadas: ordenacao }),
        });
    },
};
