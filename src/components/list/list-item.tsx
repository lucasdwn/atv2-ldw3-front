import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ITipoLista } from "@/interfaces/ITipoLista";
import { ILista } from "@/interfaces/ILista";

interface ListItemProps {
    lista: ILista;
    tipoLista: ITipoLista | string; // Aceitar tipoLista como string ou objeto
}

export function ListItem({ lista, tipoLista }: ListItemProps) {
    const { personalizacao, nome } = lista;
    const { icone, cor } = personalizacao || { icone: '', cor: '' };

    // Verifica se tipoLista é um objeto e extrai suas propriedades
    const tipoNome = typeof tipoLista === 'string' ? tipoLista : tipoLista.nome;
    const tipoPersonalizacao = typeof tipoLista === 'object' ? tipoLista.personalizacao : null;
    const tipoCor = tipoPersonalizacao ? tipoPersonalizacao.cor : '#000'; // Cor padrão se não houver
    const tipoIcone = tipoPersonalizacao ? tipoPersonalizacao.icone : '🔹'; // Ícone padrão se não houver

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1E1E1E] rounded-lg shadow-md border border-gray-200 mb-4">
            <div className="flex items-center space-x-4">
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
                <Button variant="ghost" size="icon">
                    <SquarePen className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
