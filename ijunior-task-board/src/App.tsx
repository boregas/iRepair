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
      {lista.map((ordem) => (
      <ServiceCard key={ordem.nome} {...({ ...ordem, atualizarStatus })} />
        ))
      }
    </>
  );
}