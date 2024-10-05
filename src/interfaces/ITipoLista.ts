import { IPersonalizacao } from "./IPersonalizacao";

export interface ITipoLista {
    id?: string;
    usuarioId?: string;
    nome: string;
    criadoEm?: Date;
    atualizadoEm?: Date;
    personalizacao: IPersonalizacao;
}
