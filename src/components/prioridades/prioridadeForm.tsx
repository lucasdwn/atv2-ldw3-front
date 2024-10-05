'use client';
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { EmojiPickerComponent } from '@/components/emojiPicker';
import Loading from '../loading';
import { taskService } from '@/services/taskService';
import { IPrioridade } from '@/interfaces/IPrioridade';

interface PrioridadeFormProps {
    prioridadeId?: string;
}

export const PrioridadeForm: React.FC<PrioridadeFormProps> = ({ prioridadeId }) => {
    const [nome, setNome] = useState<string>('');
    const [personalizacao, setPersonalizacao] = useState<{ icone: string; cor: string }>({ icone: '📝', cor: '#3B82F6' });
    const [isEditing, setIsEditing] = useState<boolean>(!!prioridadeId);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        if (isEditing && prioridadeId) {
            const fetchLista = async () => {
                setIsFetching(true)
                try {
                    const prioridade = await taskService.buscarPrioridade(prioridadeId);
                    setNome(prioridade.nome);
                    setPersonalizacao(prioridade.personalizacao);
                } catch (error: any) {
                    toast({
                        title: `${error.message}`,
                        description: `${error.error}`,
                        variant: "destructive",
                    });
                }
                finally {
                    setIsFetching(false);
                }
            };
            fetchLista();
        }
    }, [isEditing, prioridadeId]);

    const handleSubmit = async () => {
        setIsSubmit(true);
        try {
            const novaPrioridade: IPrioridade = {
                nome,
                personalizacao
            };

            if (isEditing) {
                await taskService.updatePrioridade(prioridadeId!, novaPrioridade);
                toast({
                    title: "Sucesso",
                    description: "Prioridade atualizada com sucesso!",
                    variant: "default",
                });
            } else {
                await taskService.createPrioridade(novaPrioridade);
                toast({
                    title: "Sucesso",
                    description: "Prioridade criada com sucesso!",
                    variant: "default",
                });
            }

            router.back()
        } catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
        finally {
            setIsSubmit(false);
        }

    };

    if (isFetching) return <Loading />;

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                    <Label htmlFor="listName">Nome da Prioridade</Label>
                    <Input
                        id="listName"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Digite o nome da prioridade"
                    />
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
                <Button onClick={handleSubmit} disabled={isSubmit}>
                    {isSubmit ?
                        (isEditing ? 'Atualizando...' : 'Salvando...') :
                        (isEditing ? 'Atualizar' : 'Salvar')
                    }
                </Button>
            </CardFooter>
        </Card>
    );
};
