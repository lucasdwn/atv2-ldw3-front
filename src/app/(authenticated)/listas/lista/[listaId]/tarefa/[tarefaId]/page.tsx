'use client';

import Loading from "@/components/loading";
import { useParams } from "next/navigation";

export default function TarefaPage() {
    const { tarefaId } = useParams() as { tarefaId: string };

    if (!tarefaId) return <Loading />;

    return (
        <div>
            <h1>Tarefa {tarefaId}</h1>
        </div>
    );
}
