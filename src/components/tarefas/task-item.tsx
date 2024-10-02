'use client';

import { Trash2, GripVertical, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ITarefa } from "@/interfaces/ITarefa";
import { IPrioridade } from "@/interfaces/IPrioridade";
import { useRouter } from "next/navigation";

interface TarefaProps {
    tarefa: ITarefa
    prioridade: IPrioridade | string;
    onEditar: () => void;
    onExcluir: () => void;
}

export default function Tarefa({
    tarefa,
    prioridade,
    onEditar,
    onExcluir
}: TarefaProps) {

    const { titulo, dataDeVencimento } = tarefa;



    const prioridadeNome = typeof prioridade === 'string' ? prioridade : prioridade.nome;
    const prioridadePersonalizacao = typeof prioridade === 'object' ? prioridade.personalizacao : null;
    const prioridadeCor = prioridadePersonalizacao ? prioridadePersonalizacao.cor : '#8146FF';
    const prioridadeIcone = prioridadePersonalizacao ? prioridadePersonalizacao.icone : '📃';
    const router = useRouter();


    const formatarData = (data: Date | string) => {
        const dataObj = typeof data === 'string' ? new Date(data) : data;
        if (isNaN(dataObj.getTime())) {
            return 'Data inválida';
        }
        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    };


    const dataFormatada = formatarData(dataDeVencimento);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-[#1E1E1E] hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg shadow-md border border-gray-200 mb-2 cursor-pointer">
            <div className="flex items-center space-x-4 flex-grow">
                <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
                <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{titulo}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="dark:text-gray-300">Vencimento: {dataFormatada}</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                            {tarefa.status}
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-gray-200 dark:bg-[#272727] rounded-full px-3 py-1">
                    <span className="text-lg">{prioridadeIcone}</span>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: prioridadeCor }}></div>
                    <span className="text-sm font-medium">{prioridadeNome}</span>
                </div>

                <Button variant="ghost" size="icon" onClick={onEditar}>
                    <SquarePen className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={onExcluir}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}