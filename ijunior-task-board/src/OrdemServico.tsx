type Status = "aberto" | "em andamento" | "finalizado";
export interface OrdemServico{
    nome: string;
    modelo: string;
    defeito: string;
    status: Status;
}