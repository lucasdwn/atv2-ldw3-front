'use client';
import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ITipoLista } from "@/interfaces/ITipoLista";
import { useRouter } from "next/navigation";

interface TipoListaItemProps {
    tipoLista: ITipoLista;
    onDelete: (id: string) => void;
}

export default function TipoListaItem({ tipoLista, onDelete }: TipoListaItemProps) {
    const { personalizacao, nome } = tipoLista;
    const { icone, cor } = personalizacao || { icone: '', cor: '' };
    const router = useRouter();

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md border border-gray-200 mb-4"
        >
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl">{icone}</span>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cor }}></div>
                </div>
                <span className="text-lg font-medium">{nome}</span>
            </div>
            <div className="flex items-center space-x-4">
                {
                    tipoLista.usuarioId !== 'admin' && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    router.push(`tiposDeListas/${tipoLista.id}`);
                                }}
                            >
                                <SquarePen className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(tipoLista.id ?? "");
                                }}
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </>
                    )
                }

            </div>
        </div>
    );
}
