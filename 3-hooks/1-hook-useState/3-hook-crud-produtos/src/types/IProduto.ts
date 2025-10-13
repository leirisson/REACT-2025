export interface Produto {
    id : string;
    nome : string;
    preco : number;
    estoque : number;
    dataCadastro : string
};

// Produto sem o ID (para o formulario de cração)
export type NovoProduto = Omit<Produto, 'id' | 'dataCadastro'>;