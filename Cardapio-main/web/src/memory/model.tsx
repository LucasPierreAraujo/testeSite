interface IPedido {
    id: number;
    nome: string;
    molho: string;
    descricao: string;
    observacao: string;
    quantidade: number;
    valor_unit: number;
    valor_total: number;
}

function adicionarPedidos(produto: IPedido) {
    let produtos: IPedido[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function listarPedidos(): IPedido[] {
    return JSON.parse(localStorage.getItem("produtos") || "[]");
}

function atualizarPedido(index: number, novosDados: Partial<IPedido>) {
    let produtos: IPedido[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    
    produtos[index] = { ...produtos[index], ...novosDados };
    localStorage.setItem("produtos", JSON.stringify(produtos));
    return;
}

function deletaPedido(index: number) {
    // Retrieve the array of objects from localStorage
    const produtos: IPedido[] = JSON.parse(localStorage.getItem("produtos") || "[]");

    // Remove the item at the specified index
    produtos.splice(index, 1);

    // Update the localStorage with the modified array
    localStorage.setItem("produtos", JSON.stringify(produtos));
}
export {deletaPedido, atualizarPedido, listarPedidos, adicionarPedidos}
