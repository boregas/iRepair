export type Status = "ABERTO" | "FINALIZADO";
export interface OrdemServico{
    nome: string;
    modelo: string;
    defeito: string;
    status: Status;
}