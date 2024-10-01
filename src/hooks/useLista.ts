'use client';
import { useEffect, useState } from 'react';
import { apiService } from '@/services/apiService';
import { ILista } from '@/interfaces/ILista';

const useLista = (page: number, limit: number, fetchUrl: string) => {
    const [listas, setListas] = useState<ILista[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState<number>(0);

    const fetchListas = async () => {
        setLoading(true);
        try {
            const response = await apiService.makeRequest(`/lista/${fetchUrl}?page=${page}&limit=${limit}`, {
                method: 'GET',
            });
            console.log(response)
            setListas(response.listas);
            setTotal(response.total);
        } catch (err: any) {
            setError(err.message);
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
