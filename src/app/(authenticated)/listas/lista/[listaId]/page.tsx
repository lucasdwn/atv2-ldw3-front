'use client';

import Loading from '@/components/loading';
import Tarefa from '@/components/tarefas/task-item';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import useTarefa from '@/hooks/useTarefa';
import { ITipoLista } from '@/interfaces/ITipoLista';
import { listService } from '@/services/listService';
import { SquarePen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VisualizarLista() {
    const { listaId } = useParams() as { listaId: string };
    const [nome, setNome] = useState<string>('');
    const [personalizacao, setPersonalizacao] = useState<{ icone: string; cor: string }>({ icone: '📝', cor: '#3B82F6' });
    const [tipoLista, setTipoLista] = useState<ITipoLista>({ nome: '' });
    const { toast } = useToast();
    const router = useRouter();
    const { tarefas, loading, refetch } = useTarefa(listaId);

    if (!listaId) return <Loading />;

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
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        fetchLista();
        refetch();
    }, []);

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
            <main>
                {
                    tarefas && tarefas.length > 0 ? (
                        <div>
                            {
                                tarefas.map((tarefa) => (
                                    <Tarefa
                                        key={tarefa.id}
                                        tarefa={tarefa}
                                        prioridade={tarefa.prioridadeId}
                                        onEditar={() => console.log('Editar tarefa')}
                                        onExcluir={() => console.log('Excluir tarefa')}
                                    />
                                ))
                            }
                        </div>

                    ) : ""
                }
            </main>
        </div>
    );
}
