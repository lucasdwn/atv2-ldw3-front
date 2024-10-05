'use client';
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { CircleChevronLeft, CircleChevronRight, ListPlus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import useTipoLista from "@/hooks/useTipoLista";
import Loading from "@/components/loading";
import TipoListaItem from "@/components/tiposLista/tipoLista-item";
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
import { listService } from "@/services/listService";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const tiposListas: React.FC = () => {
    const { toast } = useToast();
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [tipoListaToDelete, setTipoListaToDelete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const { tiposLista, total, loading, error, refetch } = useTipoLista(currentPage, itemsPerPage, searchTerm);

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

    const openDialog = (tipoListaId: string) => {
        setTipoListaToDelete(tipoListaId);
        setIsDialogOpen(true);
    };

    const confirmDelete = () => {
        if (tipoListaToDelete) {
            handleDelete(tipoListaToDelete);
            setTipoListaToDelete(null);
            setIsDialogOpen(false);
        }
    };

    const handleDelete = async (tipoListaId: string) => {
        try {
            await listService.deleteTipoLista(tipoListaId);
            toast({
                title: "Sucesso",
                description: "Tipo de Lista removido com sucesso!",
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

    return (
        <>
            <header className='mb-3'>
                <h1 className="text-4xl font-bold mb-3">Tipos de lista</h1>
                <Button onClick={() => router.push('tiposDeListas/novoTipoDeLista')}>
                    <ListPlus className="mr-2" />
                    Novo tipo de lista
                </Button>
                <div className='flex flex-col gap-2 mt-3'>
                    <Label htmlFor="listType">Filtro</Label>
                    <Input
                        id="searchTipoListas"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Digite para buscar tipos de lista"
                    />
                </div>
            </header>
            <main>
                {
                    tiposLista && tiposLista.length > 0 ? (
                        (
                            <div className="container mx-auto px-4 py-8">
                                <div className="space-y-4">
                                    {tiposLista.map((tipoLista) => (
                                        <TipoListaItem
                                            key={tipoLista.id}
                                            tipoLista={tipoLista}
                                            onDelete={() => openDialog(tipoLista.id ?? "")}
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
                                        <span>Total de tipos de listas: {total}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    ) : ''
                }
            </main>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar Remoção</AlertDialogTitle>
                        <AlertDialogDescription>
                            Você realmente deseja remover esse tipo de lista?
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete}>Confirmar</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
};

export default tiposListas;