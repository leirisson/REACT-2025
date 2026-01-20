// ColaboradorSearchInput.tsx
import React, { useState, useEffect } from 'react'

interface Colaborador {
  matricula: string;
  nome: string;
  recesso: string;
  periodoEscalado: string;
  preferenciaFolga: string;
  preferenciaPgamento: string;
}

// Dados estáticos (ou venha de uma API)
const colaboradoresData: Colaborador[] = [
  {
    matricula: "am618ps",
    nome: "Leirisson Souza dos Santos",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
  {
    matricula: "br452xj",
    nome: "Ana Clara Ferreira",
    recesso: "Recesso 2025/2026",
    periodoEscalado: "20/12 a 31/12; 01/01 a 06/01",
    preferenciaFolga: "24/12 e 31/12",
    preferenciaPgamento: "20/12 a 31/12; 01/01 a 06/01;"
  },
]



interface ColaboradorSearchInputProps {
    value: string // nome do colaborador
    onChang: (nome: string, colaborador: Colaborador) => void // opcional: passar o objeto completo
    placeholder? : string
}



export function ColaboradorSearchInput({value, onChange, placeholder="Pesquisar Servidor..."}: React.FC<ColaboradorSearchInputProps>) {
    return(
        <>
        </>
    )
}