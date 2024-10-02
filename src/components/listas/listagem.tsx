'use client';
import React, { useState } from 'react';
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

interface ListagemProps {
    title: string;
    fetchUrl: string;
    IsShared: boolean
}

const Listagem: React.FC<ListagemProps> = ({ fetchUrl, title, IsShared }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { listas, total, loading, error, refetch } = useLista(currentPage, itemsPerPage, fetchUrl);
    const router = useRouter();
    const { toast } = useToast();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [listToDelete, setListToDelete] = useState<string | null>(null); 

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

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
