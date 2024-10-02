import { StatusEnum } from "@/enums/tarefasEnum";
import { IAnexo } from "./IAnexo";
import { IPrioridade } from "./IPrioridade";
import { ILista } from "./ILista";

export interface ITarefa {
    id?: string;
    listaId: string | ILista;
    titulo: string;
    descricao: string;
    ordenacao?: number;
    prioridadeId: string | IPrioridade;
    status: StatusEnum;
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

export interface IOrdenacao {
    id: string;
    ordenacao: number;
}

export interface IRealizadoEm {
    id: string;
    realizadoEm: Date | null;
}