import { useState } from "react";
import type { OrdemServico } from "./OrdemServico";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import NewServiceForm from "./components/NewServiceForm";
import type { Status } from "./OrdemServico";


export function App() {
  
  const [lista, setLista] = useState<OrdemServico[]>([]);
  
  function adicionarOrdem(novaOrdem: OrdemServico){
    setLista((prev) => [...prev, novaOrdem]);
  }

  function atualizarStatus(nome:string, status: Status){
    const novaLista = lista.map((item) => {
      if (item.nome === nome) {
        return { ...item, status };
      }
      return item;
    });

    setLista(novaLista);
  }


  return (
    <>
      <Header />
      <NewServiceForm adicionarOrdem={adicionarOrdem} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((ordem) => (
        <ServiceCard key={ordem.nome} {...({ ...ordem, atualizarStatus })} />
        ))}
      </div> 
    </>
  );
}