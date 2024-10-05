'use client';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ListPlus, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { ListItem } from '@/components/listas/list-item';
import useLista from '@/hooks/useLista';
import Loading from '@/components/loading';
import { useRouter } from 'next/navigation';
import { listService } from '@/services/listService';
import { useToast } from '@/hooks/use-toast';
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
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ITipoLista } from '@/interfaces/ITipoLista';

interface ListagemProps {
    title: string;
    fetchUrl: string;
    IsShared: boolean
}

const Listagem: React.FC<ListagemProps> = ({ fetchUrl, title, IsShared }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const router = useRouter();
    const { toast } = useToast();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [listToDelete, setListToDelete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchTermTipoLista, setSearchTermTipoLista] = useState<string>('');
    const [tipoListaId, setTipoListaId] = useState<string>('');
    const { listas, total, loading, error, refetch } = useLista(currentPage, itemsPerPage, fetchUrl, searchTerm, tipoListaId);
    const [tipoListas, setTipoListas] = useState<ITipoLista[]>([]);

    useEffect(() => {
        const fetchTipoListas = async () => {
            try {
                const idLista = '';
                const tipos = await listService.getTipoListas(idLista, searchTermTipoLista);
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
    }, [searchTermTipoLista]);


    // if (loading) return <Loading />;
    // if (error) return <div>Error: {error}</div>;

    const totalPages = Math.ceil(total / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const novaLista = () => {
        router.push('novaLista');
    };

    const handleDelete = async (listaId: string) => {
        try {
            await listService.deleteLista(listaId);
            toast({
                title: "Sucesso",
                description: "Lista removida com sucesso!",
                variant: "default",
            });
            refetch();
        } catch (error: any) {
            toast({
                title: `${error.message}`,
                description: `${error.error}`,
                variant: "destructive",
            });
        }
    };

    const openDialog = (listaId: string) => {
        setListToDelete(listaId);
        setIsDialogOpen(true);
    };

    const confirmDelete = () => {
        if (listToDelete) {
            handleDelete(listToDelete);
            setListToDelete(null);
            setIsDialogOpen(false);
        }
    };

    return (
        <>
            <header className='mb-3'>
                <h1 className="text-4xl font-bold mb-3">{title}</h1>
                {!IsShared && listas && listas.length > 0 && (
                    <Button onClick={novaLista}>
                        <ListPlus className="mr-2" />
                        Nova lista
                    </Button>
                )}
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
                    <Label htmlFor="listType">Tipo de Lista</Label>
                    <Select onValueChange={(value) => setTipoListaId(value)} value={tipoListaId}>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo de lista" />
                        </SelectTrigger>
                        <SelectContent>
                            <Input
                                id="searchTipoListas"
                                value={searchTermTipoLista}
                                onChange={(e) => setSearchTermTipoLista(e.target.value)}
                                placeholder="Digite para buscar tipos de lista"
                            />
                            <SelectItem value="0">
                                <span className="flex items-center">
                                    Todos
                                </span>
                            </SelectItem>
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
            </header>
            <main>
                {listas && listas.length > 0 ? (
                    <div className="container mx-auto px-4 py-8">
                        <div className="space-y-4">
                            {listas.map((lista) => (
                                <ListItem
                                    key={lista.id}
                                    lista={lista}
                                    tipoLista={lista.tipoListaId}
                                    IsShared={IsShared}
                                    onDelete={() => openDialog(lista.id ?? "")}
                                />
                            ))}
                        </div>

                        <div className="flex flex-col justify-start mt-4">
                            <div className='flex gap-2 mb-3 justify-center'>
                                <button onClick={prevPage} disabled={currentPage === 1} className="flex items-center">
                                    <span className={`text-xl transition-transform duration-200 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}>
                                        <CircleChevronLeft />
                                    </span>
                                </button>
                                <button
                                    onClick={nextPage}
                                    disabled={currentPage >= totalPages}
                                    className="flex items-center"
                                >
                                    <span className={`text-xl transition-transform duration-200 ${currentPage >= totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}>
                                        <CircleChevronRight />
                                    </span>
                                </button>
                            </div>
                            <div className="flex flex-col text-center">
                                <span>Página {currentPage} de {totalPages}</span>
                                <span>Total de listas: {total}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                        <p className="text-xl mb-4 text-center">{!IsShared ? 'Você ainda não possui listas' : 'Nenhuma lista foi compartilhada com você ainda.'}</p>
                        {
                            !IsShared && (
                                <Button onClick={novaLista}>
                                    <ListPlus className="mr-2" />
                                    Nova lista
                                </Button>
                            )
                        }
                    </div>
                )}
            </main>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar Remoção</AlertDialogTitle>
                        <AlertDialogDescription>
                            Você realmente deseja remover essa lista?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default Listagem;
