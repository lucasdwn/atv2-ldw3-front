'use client';

import { Trash2, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ITarefa } from "@/interfaces/ITarefa";
import { IPrioridade } from "@/interfaces/IPrioridade";
import { useRouter } from "next/navigation";
import dateService from "@/utils/dateService";
import { StatusEnum } from "@/enums/tarefasEnum";
import { Checkbox } from "@/components/ui/checkbox";

interface TarefaProps {
    tarefa: ITarefa;
    prioridade: IPrioridade | string;
    onExcluir: () => void;
    onToggleComplete: (id: string, isCompleted: boolean) => void;
    onClick: () => void;
}

export default function Tarefa({
    tarefa,
    prioridade,
    onExcluir,
    onToggleComplete,
    onClick
}: TarefaProps) {
    const { id, titulo, dataDeVencimento, status } = tarefa;
    const router = useRouter();

    const prioridadeNome = typeof prioridade === 'string' ? prioridade : prioridade.nome;
    const prioridadePersonalizacao = typeof prioridade === 'object' ? prioridade.personalizacao : null;
    const prioridadeCor = prioridadePersonalizacao ? prioridadePersonalizacao.cor : '#8146FF';
    const prioridadeIcone = prioridadePersonalizacao ? prioridadePersonalizacao.icone : '📃';

    if (!tarefa.realizadoEm && status !== StatusEnum.Concluida) {
        const dataDeVencimento = dateService.getDataSemHoras(new Date(tarefa.dataDeVencimento));
        const dataAtual = dateService.getDataSemHoras(dateService.getServiceDate());

        if (dataDeVencimento.getTime() < dataAtual.getTime()) {
            tarefa.status = StatusEnum.Atrasada;
        } else {
            tarefa.status = StatusEnum.Pendente;
        }
    }

    const statusStyle = (status === StatusEnum.Pendente ? "bg-yellow-100 text-yellow-800" : (status === StatusEnum.Concluida ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"));

    const dataFormatada = dateService.formatarData(dataDeVencimento);

    const handleCheckboxChange = (checked: boolean) => {
        onToggleComplete(id ?? "", checked);
    };

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white dark:bg-[#1E1E1E] hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg shadow-md border border-gray-200 mb-2 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center space-x-4 flex-grow">
                <div className="cursor-grab mr-2">
                    <GripVertical size={20} />
                </div>
                <Checkbox
                    checked={status === StatusEnum.Concluida}
                    onCheckedChange={handleCheckboxChange}
                    onClick={(e) => e.stopPropagation()}
                />
                <div className="flex-grow">
                    <h2 className="text-lg font-semibold">{titulo}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="dark:text-gray-300">Vencimento: {dataFormatada}</span>
                        <Badge variant="secondary" className={statusStyle}>
                            {status}
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

                <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onExcluir(); }}>
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
