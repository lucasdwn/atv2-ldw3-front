'use client';
import { IAnexo, IResponseAnexo } from '@/interfaces/IAnexo';
import { apiService } from './apiService';
import { IOrdenacao, IRealizadoEm, ITarefa } from '@/interfaces/ITarefa';
import { FORMERR } from 'dns';
import { IPrioridade } from '@/interfaces/IPrioridade';

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

    async getPrioridades(tarefaId: string, search?: string, limit?: number,) {
        const query = new URLSearchParams();
        if (search) query.append('search', search);
        if (limit) query.append('limit', String(limit));
        query.append('tarefaId', tarefaId);

        return await apiService.makeRequest(`/prioridade/list?${query.toString()}`, {
            method: 'GET',
        });
    },

    async createTarefa(listaId: string, tarefa: ITarefa): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa?listaId=${listaId}`, {
            method: 'POST',
            body: JSON.stringify(tarefa),
        });
    },

    async buscarTarefa(listaId: string, tarefaId: string): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa/getTarefa/${tarefaId}?listaId=${listaId}`, {
            method: 'GET',
        });
    },

    async updateTarefa(listaId: string, tarefaId: string, tarefa: ITarefa): Promise<ITarefa> {
        return await apiService.makeRequest(`/tarefa/update/${tarefaId}?listaId=${listaId}`, {
            method: 'PUT',
            body: JSON.stringify(tarefa),
        });
    },

    async uploadDocumentos(uploads: File[], tarefaId?: string): Promise<IResponseAnexo> {
        const formData = new FormData();

        uploads.forEach((file, index) => {
            formData.append('documents', file);
        });

        if (tarefaId) {
            formData.append('tarefaId', tarefaId);
        }

        return await apiService.makeRequest(`/upload/documents`, {
            method: 'POST',
            body: formData,
        });
    },

    async buscarPrioridade(prioridadeId: string): Promise<IPrioridade> {
        return await apiService.makeRequest(`/prioridade/findOne/${prioridadeId}`, {
            method: 'GET',
        });
    },

    async createPrioridade(prioridade: IPrioridade): Promise<IPrioridade> {
        return await apiService.makeRequest('/prioridade/', {
            method: 'POST',
            body: JSON.stringify(prioridade),
        });
    },

    async updatePrioridade(prioridadeId: string, prioridade: IPrioridade): Promise<IPrioridade> {
        return await apiService.makeRequest(`/prioridade/update/${prioridadeId}`, {
            method: 'PUT',
            body: JSON.stringify(prioridade),
        });
    },

    async deletePrioridade(prioridadeId: string): Promise<IPrioridade> {
        return await apiService.makeRequest(`/prioridade/delete/${prioridadeId}`, {
            method: 'DELETE',
        });
    },

};
