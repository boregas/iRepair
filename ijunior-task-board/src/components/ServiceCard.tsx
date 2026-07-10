import type { OrdemServico } from "../OrdemServico";
function ServiceCard(ordemServico: OrdemServico){
    return(
        <div>
            <h1>{ordemServico.nome}</h1>
            <div>
                <p>{ordemServico.modelo}</p>
                <p>{ordemServico.defeito}</p>
                <p>{ordemServico.status}</p>
            </div>
        </div>
    );
}

export default ServiceCard;