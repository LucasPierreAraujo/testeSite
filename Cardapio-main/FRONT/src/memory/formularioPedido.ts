interface IFormularioPedido {
    telefone: string;
    nome: string;
    rua: string;
    numero: string;
    referencia: string;
    bairro: string;
    produto: IProduto[];
    frete: string;
    valorTotal: string;
    pagamento: string;
}

interface IProduto {
    quantidade: number;
    nome: string;
    valorTotalDoProduto: number;
    observacao: string
}

export function formularioPedido(props: IFormularioPedido) {
    const linkPedido = `
        https://api.whatsapp.com/send?phone=5587981152947&text=Salada%20Conceito%0ACNPJ:%2055312058/0001-62%0AInstagram:%20@saladaconceito%0AWhatsapp:(85) 99205-1239%20%0A%0A----------RESUMO%20DO%20PEDIDO----------%0ANOME:${props.nome}%0ATelefone:${props.telefone}%0ARUA:${props.rua}%0ANUMERO:${props.numero}%0AREFERENCIA:${props.referencia}%0ABAIRRO:${props.bairro}%0A-------------------------------------${props.produto.map((pro) => {
            return (
                `%0A${pro.quantidade}x ${pro.nome}%0A    ${pro.observacao.length > 0 ? `${'obs'}%0A    `:null}R$${pro.valorTotalDoProduto.toFixed(2).replace('.', ',')}`
            )
        }).join('')}%0A-------------------------------------%0AFRETE:${props.frete}%0AVALOR%20TOTAL:${props.valorTotal}%0AMEIO%20DE%20PAGAMENTO:${props.pagamento}
    `;
    return linkPedido;
}