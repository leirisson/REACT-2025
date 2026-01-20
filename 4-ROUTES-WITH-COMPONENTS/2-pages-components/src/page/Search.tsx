// import { InputSearch } from "../components/InputSearch";

import { useState } from "react";
import { InputSearch } from "../components/InputSearch";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: boolean;
};

export function Search() {
  const [search, setSearch] = useState<string>("");
  const products: Product[] = [
    {
      id: "prod-001",
      name: "Notebook UltraSlim X1",
      price: 3499.9,
      category: "Eletrônicos",
      inStock: true,
      description: "Notebook leve com 16GB RAM e SSD de 512GB.",
    },
    {
      id: "prod-002",
      name: "Mouse Óptico Ergonômico",
      price: 89.9,
      category: "Acessórios",
      inStock: true,
      description: "Design confortável para uso prolongado.",
    },
    {
      id: "prod-003",
      name: "Teclado Mecânico RGB",
      price: 249.9,
      category: "Acessórios",
      inStock: false,
      description: "Switches blue, retroiluminado e anti-ghosting.",
    },
    {
      id: "prod-004",
      name: 'Monitor 27" Full HD',
      price: 1299.0,
      category: "Eletrônicos",
      inStock: true,
      description: "Tela IPS com bordas finas e ajuste de altura.",
    },
    {
      id: "prod-005",
      name: "Fone de Ouvido Bluetooth",
      price: 199.9,
      category: "Áudio",
      inStock: true,
      description: "Cancelamento de ruído e bateria de 30h.",
    },
    {
      id: "prod-006",
      name: "Webcam HD 1080p",
      price: 159.9,
      category: "Acessórios",
      inStock: true,
      description: "Ideal para videoconferências e streaming.",
    },
    {
      id: "prod-007",
      name: "Carregador Portátil 10000mAh",
      price: 129.9,
      category: "Acessórios",
      inStock: false,
      description: "Carrega smartphones até 3 vezes.",
    },
    {
      id: "prod-008",
      name: "Smartphone Galaxy A34",
      price: 1899.0,
      category: "Celulares",
      inStock: true,
      description: 'Câmera tripla e tela AMOLED de 6.6".',
    },
  ];


    const listFilter = products.filter((product) => {
        return product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    });


  return (
    <>
      <InputSearch
        value={search}
        placeholder="Digite sua pesquisa"
        onChange={setSearch}
      />
      <ul>
        {listFilter.map((product) => (
          <li key={product.id}>
            {product.name} | {product.price} | {product.description} |{" "}
            {product.inStock ? "Estoque suficente" : "Sem estoque"}
          </li>
        ))}
      </ul>
      ;
    </>
  );
}
