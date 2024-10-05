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
import usePrioridade from "@/hooks/usePrioridade";
import PrioridadeItem from "@/components/prioridades/prioridade-item";
import { taskService } from "@/services/taskService";


const Prioridades: React.FC = () => {
    const { toast } = useToast();
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState<number>(1);
    const router = useRouter();
    const { prioridades, total, loading, error, refetch } = usePrioridade(currentPage, itemsPerPage);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [priodadeToDelete, setPrioridadeToDelete] = useState<string | null>(null);

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

    const openDialog = (prioridadeId: string) => {
        setPrioridadeToDelete(prioridadeId);
        setIsDialogOpen(true);
    };

    const confirmDelete = () => {
        if (priodadeToDelete) {
            handleDelete(priodadeToDelete);
            setPrioridadeToDelete(null);
            setIsDialogOpen(false);
        }
    };

    const handleDelete = async (prioridadeId: string) => {
        try {
            await taskService.deletePrioridade(prioridadeId);
            toast({
                title: "Sucesso",
                description: "Prioridade removida com sucesso!",
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
                <Button onClick={() => router.push('prioridades/novaPrioridade')}>
                    <ListPlus className="mr-2" />
                    Nova Prioridade
                </Button>
            </header>
            <main>
                {
                    prioridades && prioridades.length > 0 ? (
                        (
                            <div className="container mx-auto px-4 py-8">
                                <div className="space-y-4">
                                    {prioridades.map((prioridade) => (
                                        <PrioridadeItem
                                            key={prioridade.id}
                                            prioridade={prioridade}
                                            onDelete={() => openDialog(prioridade.id ?? "")}
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
                                        <span>Total de prioridades: {total}</span>
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
                            Você realmente deseja remover essa prioridade?
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

export default Prioridades;