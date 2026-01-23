import { useState } from "react";

type Product = {
  nome: string;
  categoria: string;
  ativo: boolean;
};

export function FormProduto() {
  const [produto, setProduto] = useState<Product>({
    nome: "",
    categoria: "",
    ativo: true,
  });

  function salvar() {
    console.log(produto);
  }

  return (
    <>
      <h2>Cadstro de produto</h2>

      <input
        type="text"
        name="name"
        id="name"
        placeholder="write name of product"
        value={produto.nome}
        onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
      />
      <select
        value={produto.categoria}
        onChange={(e) => setProduto({ ...produto, categoria: e.target.value })}
      >
        <option value="">Selecione</option>
        <option value="eletronico">Eletrônico</option>
        <option value="alimento">Alimento</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="ativo"
          id="ativo"
          checked={produto.ativo}
          onChange={(e) => setProduto({ ...produto, ativo: e.target.checked })}
        />
        Produto Ativo
      </label>

      <button onClick={salvar}>Salvar</button>

      <pre>{JSON.stringify(produto, null, 2)}</pre>
    </>
  );
}
