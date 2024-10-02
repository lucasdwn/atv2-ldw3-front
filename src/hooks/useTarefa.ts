'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { useToast } from './use-toast';
import { ITarefa } from '@/interfaces/ITarefa';

const useTarefa = (listaId: string) => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { toast } = useToast();

    const fetchTarefas = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/tarefa/getTarefas?listaId=${listaId}`, {
                method: 'GET',
            });
            setTarefas(response.tarefas);
        } catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    return { tarefas, loading, refetch: fetchTarefas };
};

export default useTarefa;
