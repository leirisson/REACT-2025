import { useState } from "react";

export function useContador(inicial = 0) {
  const [valor, setValor] = useState(inicial);

  const incrementar = () => setValor((valor) => valor + 1);
  const remover = () => setValor((valor) => valor === 0 ? 0 : valor - 1);
  const resetar = () => setValor(inicial);

  return { incrementar, remover, resetar, valor };
}
