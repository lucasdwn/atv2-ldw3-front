export interface IAnexo {
    id?: string;
    usuarioId?: string;
    tarefaId?: string;
    url: string;
    originalFilename: string;
    criadoEm: Date;
    atualizadoEm?: Date;
    file?: File;
};


export interface IResponseAnexo {
    message: string;
    anexos: IAnexo[];
}