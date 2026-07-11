
import type { OrdemServico } from "../OrdemServico";
import { useState } from "react";



function NewServiceForm({adicionarOrdem}: {adicionarOrdem: (novaOrdem: OrdemServico) => void}){
    const inicial: OrdemServico = { nome: "", modelo: "", defeito: "", status: "ABERTO" } as OrdemServico;
    const [dados, setDados] = useState<OrdemServico>(inicial);

    function aoClicar(){
        if(dados.nome === "" || dados.modelo === "" || dados.defeito === ""){return alert('Campo obrigatório vazio!');}
        adicionarOrdem(dados);
        setDados(inicial);
    }
    
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
                    <option value="FINALIZADO">Finalizado</option>
            </select>

            <button onClick={() => aoClicar()}>
                Salvar
            </button>

        </>
    );

}

export default NewServiceForm;