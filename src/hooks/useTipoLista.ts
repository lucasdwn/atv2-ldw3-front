'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { useToast } from './use-toast';
import { ITipoLista } from '@/interfaces/ITipoLista';

const useTipoLista = (page: number, limit: number) => {
    const [tiposLista, setTiposLista] = useState<ITipoLista[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const { toast } = useToast();

    const fetchTiposLista = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/tipoLista/listAll?page=${page}&limit=${limit}`, {
                method: 'GET',
            });
            setTiposLista(response.tiposLista);
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
        fetchTiposLista();
    }, [page, limit]);

    return { tiposLista, total, loading, error, refetch: fetchTiposLista };
};

export default useTipoLista;
