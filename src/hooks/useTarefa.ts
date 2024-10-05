'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { useToast } from './use-toast';
import { ITarefa } from '@/interfaces/ITarefa';

const useTarefa = (listaId: string, search: string, prioridadeId: string) => {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { toast } = useToast();

    const fetchTarefas = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/tarefa/getTarefas?listaId=${listaId}&search=${search}&prioridadeId=${prioridadeId}`, {
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

    useEffect(() => {
        fetchTarefas();
    }, [search, prioridadeId]);


    return { tarefas, loading, refetch: fetchTarefas };
};

export default useTarefa;
