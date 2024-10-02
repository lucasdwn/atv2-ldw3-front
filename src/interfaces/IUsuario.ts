export interface IUsuario {
    id?: string;
    nome: string;
    email: string;
    senha?: string;
    profileImage?: string;
    criadoEm?: Date;
    atualizadoEm?: Date;
}

export interface IUsuarioPermitido {
    email: string;
    podeEditar: boolean;
    criadoEm?: Date;
    atualizadoEm?: Date;
}