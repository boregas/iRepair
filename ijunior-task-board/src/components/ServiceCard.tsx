import type { OrdemServico } from "../OrdemServico";

function ServiceCard(ordemServico: OrdemServico){
    return(
        <div>
            <h1>Nome: {ordemServico.nome}</h1>
            <div>
                <p>Modelo: {ordemServico.modelo}</p>
                <p>Defeito: {ordemServico.defeito}</p>
                <p className={`
                    border p-4 rounded-lg shadow-sm transition-all
                    ${ordemServico.status === 'ABERTO' ? "bg-green-100" : "bg-red-100"}
                    `}
                    >Status: {ordemServico.status}</p>
            </div>
        </div>
    );
}

export default ServiceCard;