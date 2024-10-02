import { IPersonalizacao } from "./IPersonalizacao";
import { ITipoLista } from "./ITipoLista";
import { IUsuarioPermitido } from "./IUsuario";

export interface ILista {
    id?: string;
    usuarioId?: string;
    tipoListaId: string | ITipoLista;
    nome: string;
    usuariosPermitidos?: IUsuarioPermitido[];
    criadoEm?: Date;
    atualizadoEm?: Date;
    personalizacao: IPersonalizacao;
    isEditUsuarios?: boolean;
    isPermitidoEditar?: boolean;
}
