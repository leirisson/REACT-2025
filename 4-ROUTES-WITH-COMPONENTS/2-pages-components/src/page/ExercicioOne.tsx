import { Counter } from "../components/Counter";



export function ExercicioOne() {
    

  return (
    <>
      <div className="">
        <p>Descrição</p>
        <p>
          📝 EXERCÍCIO 1 — Counter 🎯 Objetivo Criar um componente de contador.
          📌 Requisitos Criar componente Counter Receber valor inicial via props
          Botões + e - Tipar tudo com TypeScript
        </p>

        <Counter initialValue={0}/>
      </div>
    </>
  );
}
