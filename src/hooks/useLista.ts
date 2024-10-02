'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { ILista } from '@/interfaces/ILista';
import { useToast } from './use-toast';

const useLista = (page: number, limit: number, fetchUrl: string) => {
    const [listas, setListas] = useState<ILista[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);
    const { toast } = useToast();

    const fetchListas = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/lista/${fetchUrl}?page=${page}&limit=${limit}`, {
                method: 'GET',
            });
            setListas(response.listas);
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
        fetchListas();
    }, [page, limit]);

    return { listas, total, loading, error, refetch: fetchListas };
};

export default useLista;
