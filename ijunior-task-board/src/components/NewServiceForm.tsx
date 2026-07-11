
import type { OrdemServico } from "../OrdemServico";
import { useState } from "react";


function NewServiceForm(){
    const [dados, setDados] = useState<OrdemServico>({} as OrdemServico);

    return(
        <>
            <input
                value={dados.nome}
                onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            />
            
            <input
                value={dados.modelo}
                onChange={(e) => setDados({ ...dados, modelo: e.target.value })}
            />

            <input
                value={dados.defeito}
                onChange={(e) => setDados({ ...dados, defeito: e.target.value })}
            />

            <select
                value={dados.status}
                onChange={(e) => setDados({ ...dados, status: e.target.value as OrdemServico["status"] })}>
                    <option value="ABERTO">Aberto</option>
                    <option value="FECHADO">Finalizado</option>
            </select>

            <button onClick={() => console.log(dados)}>
                Salvar
            </button>

        </>
    );

}

export default NewServiceForm;