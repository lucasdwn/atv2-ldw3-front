import { IPersonalizacao } from "./IPersonalizacao";
import { IUsuarioPermitido } from "./IUsuario";

export interface ILista {
    id?: string;
    usuarioId?: string;
    nome: string;
    usuariosPermitidos?: IUsuarioPermitido[];
    criadoEm?: Date;
    atualizadoEm?: Date;
    personalizacao?: IPersonalizacao;
}
