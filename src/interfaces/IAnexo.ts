export interface IAnexo {
    id?: string;
    usuarioId: string;
    tarefaId?: string;
    url: string;
    originalFilename: string;
    criadoEm: Date;
    atualizadoEm?: Date;
};
