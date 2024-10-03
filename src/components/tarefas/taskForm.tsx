'use client'

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { GripVertical, NotepadText, Trash2, Paperclip } from 'lucide-react'
import { taskService } from '@/services/taskService'
import { IPrioridade } from '@/interfaces/IPrioridade'
import { useToast } from '@/hooks/use-toast'
import { StatusEnum } from '@/enums/tarefasEnum'
import { Badge } from '@/components/ui/badge'
import dateService from '@/utils/dateService'
import { ISubTarefa, ITarefa } from '@/interfaces/ITarefa'
import { IAnexo } from '@/interfaces/IAnexo'

interface TarefaFormProps {
    tarefaId?: string;
}


export const TaskForm: React.FC<TarefaFormProps> = ({ tarefaId }) => {
    const { toast } = useToast();
    const router = useRouter()
    const { listaId } = useParams() as { listaId: string };

    const [status, setStatus] = useState<StatusEnum>(StatusEnum.Pendente);

    // Constantes de tarefa.
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataDeVencimento, setDataDeVencimento] = useState('')
    const [realizadoEm, setRealizadoEm] = useState('')

    // Constantes utilizadas em subtarefas
    const [subTarefas, setSubTarefas] = useState<ISubTarefa[]>([]);
    const [newSubTarefaTitulo, setnewSubTarefaTitulo] = useState('')
    const [newSubTarefaDescricao, setNewSubTarefaDescricao] = useState('')

    // Constantes utilizadas em prioridades
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [prioridades, setPrioridades] = useState<IPrioridade[]>([]);
    const [prioridadeId, setPrioridadeId] = useState<string>('');

    // Constantes utilizadas em uploads
    const [anexos, setAnexos] = useState<IAnexo[]>([])

    // Constantes uitilizadas para definir states de rota
    const [isEditing, setIsEditing] = useState<boolean>(!!tarefaId);




    const statusStyle = (status === StatusEnum.Pendente ? "bg-yellow-100 text-yellow-800" : (status === StatusEnum.Concluida ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"));


    useEffect(() => {
        const fetchPrioridades = async () => {
            try {
                const prioridades = await taskService.getPrioridades(searchTerm);
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
    }, [searchTerm]);

    useEffect(() => {
        if (realizadoEm !== null && realizadoEm !== '') {
            setStatus(StatusEnum.Concluida);
        }
        else {
            atualizarStatus();
        }
    }, [realizadoEm])

    useEffect(() => {
        atualizarStatus();
    }, [dataDeVencimento])

    const atualizarStatus = () => {
        if (!realizadoEm) {
            const dataVencimento = dateService.getDataSemHoras(new Date(dataDeVencimento + 'T00:00:00'));
            const dataAtual = dateService.getDataSemHoras(dateService.getServiceDate());
            if (dataVencimento.getTime() < dataAtual.getTime()) {
                setStatus(StatusEnum.Atrasada);
            } else {
                setStatus(StatusEnum.Pendente);
            }
        } else {
            setStatus(StatusEnum.Concluida);
        }
    };

    const addSubTarefa = () => {
        if (newSubTarefaTitulo.trim()) {
            setSubTarefas([
                ...subTarefas,
                {
                    id: Date.now().toString(),
                    titulo: newSubTarefaTitulo,
                    descricao: newSubTarefaDescricao,
                    isFinalizada: false
                }
            ])
            setnewSubTarefaTitulo('')
            setNewSubTarefaDescricao('')
        }
    }

    const removeSubTarefa = (id: string) => {
        setSubTarefas(subTarefas.filter(subTarefa => subTarefa.id !== id))
    }



    const onDragEndSubTarefa = (result: any) => {
        if (!result.destination) return
        const items = Array.from(subTarefas)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setSubTarefas(items)
    }



    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const novosAnexos: IAnexo[] = Array.from(files).map(file => ({
                id: Date.now().toString(),
                criadoEm: new Date(),
                originalFilename: file.name,
                url: URL.createObjectURL(file)
            }))
            setAnexos([...anexos, ...novosAnexos])
        }
    }

    const removeAttachment = (id: string) => {
        setAnexos(anexos.filter(anexo => anexo.id !== id))
    }

    useEffect(() => {
        if (isEditing && tarefaId) {
            const fetchLista = async () => {
                try {
                    const tarefa = await taskService.buscarTarefa(listaId, tarefaId);
                    setTitulo(tarefa.titulo);
                    setDescricao(tarefa.descricao);

                    setDataDeVencimento(dateService.formatDateForInput(tarefa.dataDeVencimento.toString()));

                    if (tarefa.realizadoEm) {
                        setRealizadoEm(dateService.formatDateForInput(tarefa.realizadoEm.toString()));
                    }
                    if (tarefa.subTarefas) {
                        setSubTarefas(tarefa.subTarefas);
                    }
                    if (tarefa.anexos) {
                        setAnexos(tarefa.anexos);
                    }

                    if (typeof tarefa.prioridadeId === 'string') {
                        setPrioridadeId(tarefa.prioridadeId);
                    } else if (tarefa.prioridadeId && 'id' in tarefa.prioridadeId) {
                        setPrioridadeId(tarefa.prioridadeId.id ?? "");
                    }
                } catch (error: any) {
                    toast({
                        title: `${error.message}`,
                        description: `${error.error}`,
                        variant: "destructive",
                    });
                }
            };
            fetchLista();
        }
    }, [isEditing, tarefaId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            const novaTarefa: ITarefa = {
                titulo,
                descricao,
                prioridadeId,
                status,
                dataDeVencimento: new Date(dataDeVencimento + 'T00:00:00'),
                realizadoEm: new Date(realizadoEm + 'T00:00:00'),
                subTarefas,
                anexos
            }

            if (isEditing && tarefaId) {
                await taskService.updateTarefa(listaId, tarefaId, novaTarefa);
                toast({
                    title: "Sucesso",
                    description: "Tarefa atualizada com sucesso!",
                    variant: "default",
                });
            }
            else {
                await taskService.createTarefa(listaId, novaTarefa);
                toast({
                    title: "Sucesso",
                    description: "Tarefa criada com sucesso!",
                    variant: "default",
                });
            }

            router.back()
        }
        catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <form>
                <CardContent className="space-y-6 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="titulo">Título</Label>
                            <Input
                                id="titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Digite o título da tarefa"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="prioridade">Prioridade</Label>
                            <Select onValueChange={(value) => setPrioridadeId(value)} value={prioridadeId}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione a prioridade" />
                                </SelectTrigger>
                                <SelectContent>
                                    <Input
                                        id="searchPrioridades"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Digite para buscar as prioridades"
                                    />
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
                        <div className="space-y-2">
                            <Label htmlFor="dataDeVencimento">Data de Vencimento</Label>
                            <Input
                                type='date'
                                id="dataDeVencimento"
                                value={dataDeVencimento}
                                onChange={(e) => setDataDeVencimento(e.target.value)}
                            />

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="realizadoEm">RealizadoEm</Label>
                            <Input
                                type='date'
                                id="realizadoEm"
                                value={realizadoEm}
                                onChange={(e) => setRealizadoEm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <div>
                                <Badge variant="secondary" className={statusStyle}>
                                    {status}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="descricao">Descrição</Label>
                        <Textarea
                            id="descricao"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Digite a descrição da tarefa"
                            rows={4}
                        />
                    </div>
                    <div className="space-y-4">
                        <Label>Subtarefas</Label>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Input
                                value={newSubTarefaTitulo}
                                onChange={(e) => setnewSubTarefaTitulo(e.target.value)}
                                placeholder="Título da subtarefa"
                            />
                            <Input
                                value={newSubTarefaDescricao}
                                onChange={(e) => setNewSubTarefaDescricao(e.target.value)}
                                placeholder="Descrição da subtarefa"
                            />
                            <Button type="button" onClick={addSubTarefa}>Adicionar</Button>
                        </div>
                        <div className="border rounded-md p-4 max-h-60 overflow-y-auto">
                            <DragDropContext onDragEnd={onDragEndSubTarefa}>
                                <Droppable droppableId="subtarefas">
                                    {(provided) => (
                                        <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                                            {subTarefas.map((subtarefa, index) => (
                                                <Draggable key={subtarefa.id} draggableId={subtarefa.id ?? ""} index={index}>
                                                    {(provided) => (
                                                        <li
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            className="flex items-center gap-2 bg-muted p-2 rounded-md"
                                                        >
                                                            <span {...provided.dragHandleProps}>
                                                                <GripVertical className="text-muted-foreground" />
                                                            </span>
                                                            <Checkbox
                                                                checked={subtarefa.isFinalizada}
                                                                onCheckedChange={(checked) => {
                                                                    const updateSubtarefas = subTarefas.map(st =>
                                                                        st.id === subtarefa.id ? { ...st, isFinalizada: checked === true } : st
                                                                    )
                                                                    setSubTarefas(updateSubtarefas)
                                                                }}
                                                            />
                                                            <span className="flex-grow">{subtarefa.titulo}</span>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <NotepadText className="text-muted-foreground" />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p>{subtarefa.descricao}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => removeSubTarefa(subtarefa.id ?? "")}
                                                            >
                                                                <Trash2 className="h-4 w-4" />
                                                            </Button>
                                                        </li>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </ul>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </div>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">
                                    <Paperclip className="mr-2 h-4 w-4" />
                                    Anexos
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Gerenciar Anexos</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <Input
                                        type="file"
                                        onChange={handleFileUpload}
                                        multiple
                                    />
                                    <div className="max-h-[200px] overflow-y-auto">
                                        {anexos.map(anexo => (
                                            <div key={anexo.id} className="flex items-center justify-between p-2 border-b">
                                                <a href={anexo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    {anexo.originalFilename}
                                                </a>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeAttachment(anexo.id ?? "")}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" type="button" onClick={() => router.back()}>Voltar</Button>
                    <Button onClick={handleSubmit} type="submit">{isEditing ? 'Atualizar' : 'Salvar'}</Button>
                </CardFooter>
            </form>
        </Card>
    )
}