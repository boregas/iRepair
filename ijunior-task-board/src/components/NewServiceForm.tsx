
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
        <div className="flex-col flex md:flex-row flex-wrap items-center">  
            
            <label className="bg-gray-300 py-2 px-2 m-4 font-serif border">NOME:</label>
            <input 
                className="bg-gray-300 px-4 py-0.5 rounded-full border"
                value={dados.nome}
                onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            />

            <label className="bg-gray-300 py-2 px-2 m-4 font-serif border">MODELO:</label>
            <input 
                className="bg-gray-300 px-4 py-1 rounded-full border"
                value={dados.modelo}
                onChange={(e) => setDados({ ...dados, modelo: e.target.value })}
            />

            <label className="bg-gray-300 py-2 px-2 m-4 font-serif border">DEFEITO:</label>
            <input 
                className="bg-gray-300 px-4 py-1 rounded-full border"
                value={dados.defeito}
                onChange={(e) => setDados({ ...dados, defeito: e.target.value })}
            />

            <select 
                className="bg-gray-300 px-2 py-2 m-4 font-serif border"
                value={dados.status}
                onChange={(e) => setDados({ ...dados, status: e.target.value as OrdemServico["status"] })}>
                    <option value="ABERTO">ABERTO</option>
                    <option value="FINALIZADO">FINALIZADO</option>
            </select>

            <button 
                className="bg-green-300 px-4 py-2 m-2 rounded-full font-serif border"
                onClick={() => aoClicar()}>
                Salvar
            </button>

        </div>
    );

}

export default NewServiceForm;