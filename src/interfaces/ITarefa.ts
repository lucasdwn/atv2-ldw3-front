import { StatusEnum } from "@/enums/tarefasEnum";
import { IAnexo } from "./IAnexo";
import { IPrioridade } from "./IPrioridade";
import { ILista } from "./ILista";

export interface ITarefa {
    listaId: string | ILista;
    titulo: string;
    descricao: string;
    ordenacao?: number;
    prioridadeId: string | IPrioridade;
    status?: StatusEnum;
    subTarefas?: ISubTarefa[];
    anexos?: IAnexo[];
    dataDeVencimento: Date;
    realizadoEm?: Date;
    criadoEm?: Date;
    atualizadoEm?: Date;
}

export interface ISubTarefa {
    id?: string;
    titulo: string;
    descricao: string;
    ordenacao?: number;
    criadoEm?: Date;
    isFinalizada?: boolean;
}