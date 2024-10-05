'use client';

import Loading from '@/components/loading';
import { TipoListaForm } from '@/components/tiposLista/tipoListaForm';
import { useParams } from 'next/navigation';

export default function EdicaoTipoDeLista() {
    const { tipoDeListaId } = useParams() as { tipoDeListaId: string };

    if (!tipoDeListaId) return <Loading />;

    return <TipoListaForm tipoListaId={tipoDeListaId} />;
}
