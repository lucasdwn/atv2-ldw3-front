'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { format } from 'date-fns'
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

interface Subtask {
    id: string
    title: string
    description: string
    completed: boolean
}

interface Attachment {
    id: string
    name: string
    url: string
}

export default function TaskForm() {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [status, setStatus] = useState('')
    const [description, setDescription] = useState('')
    const [subtasks, setSubtasks] = useState<Subtask[]>([])
    const [newSubtaskTitle, setNewSubtaskTitle] = useState('')
    const [newSubtaskDescription, setNewSubtaskDescription] = useState('')
    const [attachments, setAttachments] = useState<Attachment[]>([])
    const router = useRouter()

    const handleDueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '')
        if (value.length > 8) value = value.slice(0, 8)
        if (value.length >= 4) {
            value = `${value.slice(0, 2)}/${value.slice(2, 4)}/${value.slice(4)}`
        } else if (value.length >= 2) {
            value = `${value.slice(0, 2)}/${value.slice(2)}`
        }
        setDueDate(value)
    }

    const addSubtask = () => {
        if (newSubtaskTitle.trim()) {
            setSubtasks([
                ...subtasks,
                {
                    id: Date.now().toString(),
                    title: newSubtaskTitle,
                    description: newSubtaskDescription,
                    completed: false
                }
            ])
            setNewSubtaskTitle('')
            setNewSubtaskDescription('')
        }
    }

    const removeSubtask = (id: string) => {
        setSubtasks(subtasks.filter(subtask => subtask.id !== id))
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return
        const items = Array.from(subtasks)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setSubtasks(items)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const newAttachments = Array.from(files).map(file => ({
                id: Date.now().toString(),
                name: file.name,
                url: URL.createObjectURL(file)
            }))
            setAttachments([...attachments, ...newAttachments])
        }
    }

    const removeAttachment = (id: string) => {
        setAttachments(attachments.filter(attachment => attachment.id !== id))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log({ title, priority, dueDate, status, description, subtasks, attachments })
        router.back()
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6 pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Título</Label>
                            <Input
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Digite o título da tarefa"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="priority">Prioridade</Label>
                            <Select onValueChange={setPriority} value={priority}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione a prioridade" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Baixa</SelectItem>
                                    <SelectItem value="medium">Média</SelectItem>
                                    <SelectItem value="high">Alta</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="dueDate">Data de Vencimento</Label>
                            <Input
                                id="dueDate"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                placeholder="DD/MM/AAAA"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select onValueChange={setStatus} value={status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione o status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="todo">A fazer</SelectItem>
                                    <SelectItem value="inProgress">Em progresso</SelectItem>
                                    <SelectItem value="done">Concluído</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Digite a descrição da tarefa"
                            rows={4}
                        />
                    </div>
                    <div className="space-y-4">
                        <Label>Subtarefas</Label>
                        <div className="flex flex-col md:flex-row gap-2">
                            <Input
                                value={newSubtaskTitle}
                                onChange={(e) => setNewSubtaskTitle(e.target.value)}
                                placeholder="Título da subtarefa"
                            />
                            <Input
                                value={newSubtaskDescription}
                                onChange={(e) => setNewSubtaskDescription(e.target.value)}
                                placeholder="Descrição da subtarefa"
                            />
                            <Button type="button" onClick={addSubtask}>Adicionar</Button>
                        </div>
                        <div className="border rounded-md p-4 max-h-60 overflow-y-auto">
                            <DragDropContext onDragEnd={onDragEnd}>
                                <Droppable droppableId="subtasks">
                                    {(provided) => (
                                        <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                                            {subtasks.map((subtask, index) => (
                                                <Draggable key={subtask.id} draggableId={subtask.id} index={index}>
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
                                                                checked={subtask.completed}
                                                                onCheckedChange={(checked) => {
                                                                    const updatedSubtasks = subtasks.map(st =>
                                                                        st.id === subtask.id ? { ...st, completed: checked === true } : st
                                                                    )
                                                                    setSubtasks(updatedSubtasks)
                                                                }}
                                                            />
                                                            <span className="flex-grow">{subtask.title}</span>
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <NotepadText className="text-muted-foreground" />
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p>{subtask.description}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => removeSubtask(subtask.id)}
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
                                        {attachments.map(attachment => (
                                            <div key={attachment.id} className="flex items-center justify-between p-2 border-b">
                                                <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    {attachment.name}
                                                </a>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeAttachment(attachment.id)}
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
                    <Button type="submit">Salvar</Button>
                </CardFooter>
            </form>
        </Card>
    )
}