import { useState } from "react";
import type { OrdemServico } from "./OrdemServico";
import ServiceCard from "./components/ServiceCard";
import Header from "./components/header";


const teste: OrdemServico = {
  nome: "Bernardo",
  modelo: "Galaxy S24",
  defeito: "Tela quebrada",
  status: "ABERTO"
};

const teste2: OrdemServico={
  nome: "Joao",
  modelo: 'ipod',
  defeito: 'sem memoria',
  status: 'FINALIZADO'

}

export function App() {
  
  const [ordens, setOrdens] = useState<OrdemServico[]>([teste, teste2]);
  
  return (
    <>
      <Header />
      {ordens.map((ordem) => (
        <ServiceCard key={ordem.nome}{...ordem} />
      ))}
    </>
  );
}