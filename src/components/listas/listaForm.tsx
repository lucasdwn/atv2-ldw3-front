'use client';
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { listService } from '@/services/listService';
import { ILista } from '@/interfaces/ILista';
import { ITipoLista } from '@/interfaces/ITipoLista';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EmojiPickerComponent } from '@/components/emojiPicker';

interface ListaFormProps {
    listaId?: string;
}

export const ListaForm: React.FC<ListaFormProps> = ({ listaId }) => {
    const [nome, setNome] = useState<string>('');
    const [tipoListaId, setTipoListaId] = useState<string>('');
    const [personalizacao, setPersonalizacao] = useState<{ icone: string; cor: string }>({ icone: '📝', cor: '#3B82F6' });
    const [tipoListas, setTipoListas] = useState<ITipoLista[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(!!listaId);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        const fetchTipoListas = async () => {
            try {
                const tipos = await listService.getTipoListas(searchTerm);
                setTipoListas(tipos);
            } catch (error: any) {
                toast({
                    title: `${error.message}`,
                    description: `${error.error}`,
                    variant: "destructive",
                });
            }
        };
        fetchTipoListas();
    }, [searchTerm]);

    useEffect(() => {
        if (isEditing && listaId) {
            const fetchLista = async () => {
                try {
                    const lista = await listService.buscarLista(listaId);
                    setNome(lista.nome);
                    if (typeof lista.tipoListaId === 'string') {
                        setTipoListaId(lista.tipoListaId);
                    } else if (lista.tipoListaId && 'id' in lista.tipoListaId) {
                        setTipoListaId(lista.tipoListaId.id ?? "");
                    }
                    setPersonalizacao(lista.personalizacao);
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
    }, [isEditing, listaId]);

    const handleSubmit = async () => {
        try {
            const novaLista: ILista = {
                nome,
                tipoListaId,
                personalizacao,
            };

            if (isEditing) {
                await listService.updateLista(listaId!, novaLista);
                toast({
                    title: "Sucesso",
                    description: "Lista atualizada com sucesso!",
                    variant: "default",
                });
            } else {
                await listService.createLista(novaLista);
                toast({
                    title: "Sucesso",
                    description: "Lista criada com sucesso!",
                    variant: "default",
                });
            }

            router.push('/listas/minhasListas');
        } catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                    <Label htmlFor="listName">Nome da Lista</Label>
                    <Input
                        id="listName"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome da lista"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="listType">Tipo de Lista</Label>
                    <Select onValueChange={(value) => setTipoListaId(value)} value={tipoListaId}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de lista" />
                        </SelectTrigger>
                        <SelectContent>
                            <Input
                                id="searchTipoListas"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Digite para buscar tipos de lista"
                            />
                            {tipoListas.map(tipo => (
                                <SelectItem key={tipo.id} value={tipo.id ?? ""}>
                                    <span className="flex items-center">
                                        <span className="mr-2">{tipo.personalizacao?.icone}</span>
                                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: tipo.personalizacao?.cor }}></span>
                                        {tipo.nome}
                                    </span>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>Personalização</Label>
                    <div className="flex items-center space-x-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-24 text-2xl">
                                    {personalizacao.icone}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <EmojiPickerComponent onEmojiSelect={(emoji) => setPersonalizacao({ ...personalizacao, icone: emoji })} />
                            </PopoverContent>
                        </Popover>
                        <Input
                            type="color"
                            value={personalizacao.cor}
                            onChange={(e) => setPersonalizacao({ ...personalizacao, cor: e.target.value })}
                            className="w-24 h-10 p-1 rounded"
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.back()}>Voltar</Button>
                <Button onClick={handleSubmit}>{isEditing ? 'Atualizar' : 'Salvar'}</Button>
            </CardFooter>
        </Card>
    );
};
