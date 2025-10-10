import { useState, useEffect } from "react";



export function useLocalStorage(chave: string, valorInicial: string) {
  // Lêdo localStorage ou usa valor inicial
  const [valor, setValor] = useState(() => {
    const itemSalvo = localStorage.getItem(chave);
    return itemSalvo ? JSON.parse(itemSalvo) : valorInicial;
  });

  // Salva no localStorage sempre que o valor mudar
  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [valor, setValor]);
  return [valor, setValor];
}
