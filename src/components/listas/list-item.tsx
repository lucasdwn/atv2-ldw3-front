'use client';
import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ITipoLista } from "@/interfaces/ITipoLista";
import { ILista } from "@/interfaces/ILista";
import { useRouter } from "next/navigation";

interface ListItemProps {
    lista: ILista;
    tipoLista: ITipoLista | string;
    IsShared: boolean;
    onDelete: (id: string) => void;
}

export function ListItem({ lista, tipoLista, IsShared, onDelete }: ListItemProps) {
    const { personalizacao, nome } = lista;
    const { icone, cor } = personalizacao || { icone: '', cor: '' };
    const router = useRouter();

    const tipoNome = typeof tipoLista === 'string' ? tipoLista : tipoLista.nome;
    const tipoPersonalizacao = typeof tipoLista === 'object' ? tipoLista.personalizacao : null;
    const tipoCor = tipoPersonalizacao ? tipoPersonalizacao.cor : '#8146FF';
    const tipoIcone = tipoPersonalizacao ? tipoPersonalizacao.icone : '📃';

    const handleItemClick = () => {
        router.push(`lista/${lista.id}`);
    };

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-[#1E1E1E] hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg shadow-md border border-gray-200 mb-4 cursor-pointer"
            onClick={handleItemClick}
        >
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center space-x-2">
                    <span className="text-2xl">{icone}</span>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: cor }}></div>
                </div>
                <span className="text-lg font-medium">{nome}</span>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-200 dark:bg-[#272727] rounded-full px-3 py-1">
                    <span className="text-lg">{tipoIcone}</span>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tipoCor }}></div>
                    <span className="text-sm font-medium">{tipoNome}</span>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                        e.stopPropagation(); 
                        router.push(`editar/${lista.id}`);
                    }}
                >
                    <SquarePen className="h-4 w-4" />
                </Button>
                {
                    !IsShared && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(lista.id ?? "");
                            }}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    )
                }
            </div>
        </div>
    );
}
