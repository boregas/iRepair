import { useState } from "react";
import type { OrdemServico } from "./OrdemServico";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/Header";
import NewServiceForm from "./components/NewServiceForm";


export function App() {
  
  const [lista, setLista] = useState<OrdemServico[]>([]);
  
  function adicionarOrdem(novaOrdem: OrdemServico){
    setLista((prev) => [...prev, novaOrdem]);
  }


  return (
    <>
      <Header />
      {lista.map((ordem) => (
        <ServiceCard key={ordem.nome}{...ordem} />
        ))
      }
      <NewServiceForm adicionarOrdem={adicionarOrdem} />
    </>
  );
}