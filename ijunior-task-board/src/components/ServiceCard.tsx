import type { OrdemServico } from "../OrdemServico";
import type { Status } from "../OrdemServico";


function ServiceCard(ordemServico: OrdemServico & { atualizarStatus: (nome: string, status: Status ) => void }){

    return(
        <div>
            <h1 className="bg-gray-300 px-2 py-2 m-4 font-serif border">Nome: {ordemServico.nome}</h1>
            <div>
                <p className="bg-gray-300 px-2 py-2 m-4 font-serif border">Modelo: {ordemServico.modelo}</p>
                <p className="bg-gray-300 px-2 py-2 m-4 font-serif border">Defeito: {ordemServico.defeito}</p>
                <p className={`
                    bg-gray-300 px-2 py-2 m-4 font-serif border
                    ${ordemServico.status === 'ABERTO' ? "bg-green-200" : "bg-red-200"}
                    `}
                    >Status: {<select 
                                className= "px-2 py-2 m-4 font-serif"
                                value={ordemServico.status}
                                onChange={(e) => ordemServico.atualizarStatus(ordemServico.nome, e.target.value as Status)}>
                                <option value="ABERTO">ABERTO</option>
                                <option value="FINALIZADO">FINALIZADO</option>
                            </select>}
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;