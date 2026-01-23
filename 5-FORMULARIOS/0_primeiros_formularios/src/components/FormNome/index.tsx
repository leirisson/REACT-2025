import { useState } from "react";

export function FormNome() {
  const [name, setName] = useState<string>("");

  function handleChangeName(valor: string) {
    setName(valor);
  }

  function salvar() {
    console.log({ nome: name });
  }

  return (
    <>
      <h2>Cadastro de Nome</h2>
      <p>
        📘 EXEMPLO 1 — Formulário simples (nome) 🎯 Objetivo Capturar o nome do
        usuário e mostrar na tela. 📂 Estrutura mental 1 campo 1 estado 1 função
        de mudança
      </p>

      <input
        type="text"
        placeholder="Digite o seu nome"
        value={name}
        onChange={(e) => handleChangeName(e.target.value)}
      />
      <button onClick={salvar}>Salvar Nome</button>

      <p>Nome digitado: {name}</p>
    </>
  );
}
