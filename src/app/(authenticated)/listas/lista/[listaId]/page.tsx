'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Tarefa from '@/components/tarefas/task-item';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useTarefa from '@/hooks/useTarefa';
import { ITipoLista } from '@/interfaces/ITipoLista';
import { listService } from '@/services/listService';
import { SquarePen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ITarefa } from '@/interfaces/ITarefa';
import { StatusEnum } from '@/enums/tarefasEnum';
import Loading from '@/components/loading';

export default function VisualizarLista() {
    const { listaId } = useParams() as { listaId: string };
    const [nome, setNome] = useState<string>('');
    const [personalizacao, setPersonalizacao] = useState<{ icone: string; cor: string }>({ icone: '📝', cor: '#3B82F6' });
    const [tipoLista, setTipoLista] = useState<ITipoLista>({ nome: '' });
    const { toast } = useToast();
    const router = useRouter();
    const { tarefas: initialTarefas, loading, refetch } = useTarefa(listaId);
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    useEffect(() => {
        if (initialTarefas) {
            setTarefas(initialTarefas);
        }
    }, [initialTarefas]);

    const onDragEnd = async (result: any) => {
        if (!result.destination) {
            return;
        }

        const items = Array.from(tarefas);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTarefas(items);

        const updatedOrder = items.map((item, index) => ({
            id: item.id,
            order: index + 1
        }));

        console.log(updatedOrder);
        // Atualize a ordem no backend
        // try {
        //     await listService.updateTaskOrder(listaId, updatedOrder); 
        // } catch (error: any) {
        //     toast({
        //         title: 'Erro ao atualizar a ordem das tarefas',
        //         description: error.message,
        //         variant: 'destructive',
        //     });
        // }
    };

    const handleToggleComplete = async (id: string, isCompleted: boolean) => {
        const updatedTarefas = tarefas.map((tarefa: ITarefa) =>
            tarefa.id === id
                ? { ...tarefa, status: isCompleted ? StatusEnum.Concluida : StatusEnum.Pendente }
                : tarefa
        );
        setTarefas(updatedTarefas);
        // Atualizar no backend
        // try {
        //     await listService.updateTaskStatus(id, isCompleted);
        // } catch (error: any) {
        //     toast({
        //         title: 'Erro ao atualizar tarefa',
        //         description: error.message,
        //         variant: 'destructive',
        //     });
        // }
    };

    const handleExcluir = async (id: string) => {
        const updatedTarefas = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(updatedTarefas);
        // Excluir no backend
        // try {
        //     await listService.deleteTask(id);
        // } catch (error: any) {
        //     toast({
        //         title: 'Erro ao excluir tarefa',
        //         description: error.message,
        //         variant: 'destructive',
        //     });
        // }
    };

    const fetchLista = async () => {
        try {
            const lista = await listService.buscarLista(listaId);
            setNome(lista.nome);
            if (typeof lista.tipoListaId === 'string') {
            } else if (lista.tipoListaId && 'id' in lista.tipoListaId) {
                setTipoLista(lista.tipoListaId);
            }
            setPersonalizacao(lista.personalizacao);
        } catch (error: any) {
            toast({
                title: error.message,
                description: error.error,
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        fetchLista();
        refetch();
    }, []);

    if (!listaId) return <Loading />;

    return (
        <div>
            <header className='mb-3'>
                <div className="flex flex-col-reverse sm:flex-row space-x-2 items-center mb-4">
                    <div className="flex items-center space-x-2 bg-gray-200 dark:bg-[#272727] rounded-full px-3 py-1">
                        <span className="text-2xl">{personalizacao.icone}</span>
                        <div className="w-5 h-5 rounded-full" style={{ backgroundColor: personalizacao.cor }}></div>
                    </div>
                    <h1 className="text-4xl font-bold text-center sm:text-start">{nome}</h1>
                </div>
                <div className='mb-3 gap-3 flex flex-col sm:flex-row justify-between'>
                    <div className="flex items-center space-x-2 bg-gray-200 dark:bg-[#272727] rounded-full px-3 py-1">
                        <span className="text-lg">{tipoLista.personalizacao?.icone}</span>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tipoLista.personalizacao?.cor }}></div>
                        <span className="text-sm font-medium">{tipoLista.nome}</span>
                    </div>
                    <div className='flex flex-col-reverse gap-2 sm:flex-row'>
                        <Button variant="outline" className="mr-2" onClick={() => router.back()}>Voltar</Button>
                        <Button onClick={() => router.push(`/listas/editar/${listaId}`)}>
                            <SquarePen className="mr-2" />
                            Editar lista
                        </Button>
                    </div>
                </div>
            </header>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {tarefas.map((tarefa, index) => (
                                <Draggable key={tarefa.id} draggableId={tarefa.id ?? ""} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Tarefa
                                                tarefa={tarefa}
                                                prioridade={tarefa.prioridadeId}
                                                onExcluir={() => handleExcluir(tarefa.id ?? "")}
                                                onToggleComplete={handleToggleComplete}
                                                onClick={() => router.push(`/listas/lista/${listaId}/tarefa/${tarefa.id}`)}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
