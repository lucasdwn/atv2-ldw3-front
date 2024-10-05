'use client';

import Loading from '@/components/loading';
import { PrioridadeForm } from '@/components/prioridades/prioridadeForm';
import { useParams } from 'next/navigation';

export default function EdicaoPrioridade() {
    const { prioridadeId } = useParams() as { prioridadeId: string };

    if (!prioridadeId) return <Loading />;

    return <PrioridadeForm prioridadeId={prioridadeId} />;
}
