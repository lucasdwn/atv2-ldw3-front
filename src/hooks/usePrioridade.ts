'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { useToast } from './use-toast';
import { IPrioridade } from '@/interfaces/IPrioridade';

const usePrioridade = (page: number, limit: number, search: string) => {
    const [prioridades, setPrioridades] = useState<IPrioridade[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const { toast } = useToast();

    const fetchPrioridades = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/prioridade/listAll?page=${page}&limit=${limit}&search=${search}`, {
                method: 'GET',
            });
            setPrioridades(response.prioridades);
            setTotal(response.total);
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
        fetchPrioridades();
    }, [page, limit, search]);

    return { prioridades, total, loading, error, refetch: fetchPrioridades };
};

export default usePrioridade;
