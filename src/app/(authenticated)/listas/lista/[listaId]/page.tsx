'use client';

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Tarefa from '@/components/tarefas/task-item';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useTarefa from '@/hooks/useTarefa';
import { ITipoLista } from '@/interfaces/ITipoLista';
import { listService } from '@/services/listService';
import { Plus, SquarePen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IOrdenacao, IRealizadoEm, ITarefa } from '@/interfaces/ITarefa';
import { StatusEnum } from '@/enums/tarefasEnum';
import Loading from '@/components/loading';
import { taskService } from '@/services/taskService';
import dateService from '@/utils/dateService';
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel
} from "@/components/ui/alert-dialog";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { IPrioridade } from '@/interfaces/IPrioridade';

export default function VisualizarLista() {
    const { listaId } = useParams() as { listaId: string };
    const [nome, setNome] = useState<string>('');
    const [personalizacao, setPersonalizacao] = useState<{ icone: string; cor: string }>({ icone: '📝', cor: '#3B82F6' });
    const [tipoLista, setTipoLista] = useState<ITipoLista>({ nome: '', personalizacao: { icone: '', cor: '' } });
    const { toast } = useToast();
    const router = useRouter();
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [isPermitidoEditar, setIsPermitidoEditar] = useState<boolean>(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchTermPrioridade, setSearchTermPrioridade] = useState<string>('');
    const [prioridadeId, setPrioridadeId] = useState<string>('');
    const [prioridades, setPrioridades] = useState<IPrioridade[]>([]);
    const { tarefas: initialTarefas, loading, refetch } = useTarefa(listaId, searchTerm, prioridadeId);

    useEffect(() => {
        if (initialTarefas) {
            setTarefas(initialTarefas);
        }
    }, [initialTarefas]);

    useEffect(() => {
        const fetchPrioridades = async () => {
            try {
                const idTarefa = '';
                const prioridades = await taskService.getPrioridades(idTarefa, searchTerm);
                setPrioridades(prioridades);
            } catch (error: any) {
                toast({
                    title: `${error.message}`,
                    description: `${error.error}`,
                    variant: "destructive",
                });
            }
        };
        fetchPrioridades();
    }, [searchTermPrioridade]);

    const onDragEnd = async (result: any) => {
        if (!result.destination) {
            return;
        }

        const items = Array.from(tarefas);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTarefas(items);

        const updatedOrder: IOrdenacao[] = items.map((item, index) => ({
            id: item.id ?? "",
            ordenacao: index + 1
        }));

        try {
            await taskService.atualizarOrdenacao(listaId, updatedOrder);
        } catch (error: any) {
            toast({
                title: error.message,
                description: error.error,
                variant: 'destructive',
            });
        }
    };

    const retornarStatus = (data: Date) => {
        const dataDeVencimento = dateService.getDataSemHoras(new Date(data));
        const dataAtual = dateService.getDataSemHoras(dateService.getServiceDate());

        if (dataDeVencimento.getTime() < dataAtual.getTime()) {
            return StatusEnum.Atrasada;
        } else {
            return StatusEnum.Pendente;
        }
    }

    const handleToggleComplete = async (id: string, isCompleted: boolean) => {
        const updatedTarefas = tarefas.map((tarefa: ITarefa) =>
            tarefa.id === id
                ? { ...tarefa, status: isCompleted ? StatusEnum.Concluida : retornarStatus(tarefa.dataDeVencimento) }
                : tarefa
        );
        setTarefas(updatedTarefas);



        const realizadoEm: IRealizadoEm = {
            id: id,
            realizadoEm: (isCompleted ? dateService.getServiceDate() : null)
        }
        try {
            await taskService.atualizarRealizadoEm(listaId, realizadoEm);
        } catch (error: any) {
            toast({
                title: error.message,
                description: error.error,
                variant: 'destructive',
            });
        }
    };

    const handleExcluir = async (id: string) => {
        const updatedTarefas = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(updatedTarefas);
        try {
            await taskService.deleteTarefa(listaId, id);
            toast({
                title: "Sucesso",
                description: "Tarefa removida com sucesso!",
                variant: "default",
            });
        } catch (error: any) {
            toast({
                title: error.message,
                description: error.error,
                variant: 'destructive',
            });
        }
    };

    const confirmDelete = () => {
        if (taskToDelete) {
            handleExcluir(taskToDelete);
            setTaskToDelete(null);
            setIsDialogOpen(false);
        }
    };

    const openDialog = (taskId: string) => {
        setTaskToDelete(taskId);
        setIsDialogOpen(true);
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
            setIsPermitidoEditar(lista.isPermitidoEditar || false)
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
    // if (loading) return <Loading />;

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
                {
                    isPermitidoEditar && (
                        <div>
                            <Button onClick={() => router.push(`/listas/lista/${listaId}/tarefa/novaTarefa`)}>
                                <Plus className="mr-2" />
                                Nova tarefa
                            </Button>
                        </div>
                    )
                }
                <div className='flex flex-col gap-2 mt-3'>
                    <Label htmlFor="listType">Filtro</Label>
                    <Input
                        id="searchPrioridades"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Digite para buscar listas"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="listType">Prioridade</Label>
                    <Select onValueChange={(value) => setPrioridadeId(value)} value={prioridadeId}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione a prioridade" />
                        </SelectTrigger>
                        <SelectContent>
                            <Input
                                id="searchTipoListas"
                                value={searchTermPrioridade}
                                onChange={(e) => setSearchTermPrioridade(e.target.value)}
                                placeholder="Digite para buscar prioridades"
                            />
                            <SelectItem value="a">
                                <span className="flex items-center">
                                    Todos
                                </span>
                            </SelectItem>
                            {prioridades.map(prioridade => (
                                <SelectItem key={prioridade.id} value={prioridade.id ?? ""}>
                                    <span className="flex items-center">
                                        <span className="mr-2">{prioridade.personalizacao?.icone}</span>
                                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: prioridade.personalizacao?.cor }}></span>
                                        {prioridade.nome}
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
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
                                <Draggable key={tarefa.id} draggableId={tarefa.id ?? ""} index={index} isDragDisabled={!isPermitidoEditar}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Tarefa
                                                tarefa={tarefa}
                                                prioridade={tarefa.prioridadeId}
                                                onExcluir={() => openDialog(tarefa.id ?? "")}
                                                onToggleComplete={handleToggleComplete}
                                                onClick={() => router.push(`/listas/lista/${listaId}/tarefa/${tarefa.id}`)}
                                                isPermitidoEditar={isPermitidoEditar}
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
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar Remoção</AlertDialogTitle>
                        <AlertDialogDescription>
                            Você realmente deseja remover essa tarefa?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
