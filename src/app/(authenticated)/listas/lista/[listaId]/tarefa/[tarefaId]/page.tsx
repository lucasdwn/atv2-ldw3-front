'use client';

import Loading from "@/components/loading";
import { TaskForm } from "@/components/tarefas/taskForm";
import { useParams } from "next/navigation";

export default function TarefaPage() {
    const { tarefaId } = useParams() as { tarefaId: string };

    if (!tarefaId) return <Loading />;

    return <TaskForm tarefaId={tarefaId}/>
}
