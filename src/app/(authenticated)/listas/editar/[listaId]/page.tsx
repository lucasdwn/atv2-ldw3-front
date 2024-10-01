'use client';

import { ListaForm } from '@/components/listas/listaForm';
import Loading from '@/components/loading';
import { useParams } from 'next/navigation';

export default function EdicaoLista() {
    const { listaId } = useParams() as { listaId: string }; 

    if (!listaId) return <Loading />;

    return <ListaForm listaId={listaId} />;
}
